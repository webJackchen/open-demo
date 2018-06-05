<template>
  <div class="upload-wrap">
    <div>
        <a href="#" class="btn btn-default" v-if="!!uploadComponentConfig.single">
          <input type="file" class="upload-btn" :id="uploadComponentConfig.upfileId" name="files" :accept="uploadComponentConfig.accept">
          选择文件
        </a>
        <a href="#" class="btn btn-default" v-if="!uploadComponentConfig.single">
          <input type="file" class="upload-btn" v-if="!uploadComponentConfig.single" :id="uploadComponentConfig.upfileId" name="files" multiple="multiple" :accept="uploadComponentConfig.accept">
          选择文件
        </a>
        <span class="file-input-name">{{ fileName }}</span>
    </div>
    <div class="upload-tip" v-if="!!uploadComponentConfig.uploadTip">
        {{uploadComponentConfig.uploadTip}}
    </div>
    <div class="img-preview" v-if="uploadComponentConfig.imgpreview && imgDataUrl.length > 0 ">
      <img :src="item.src" alt="图片" v-for="item in imgDataUrl" :key="item.index">
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import httpConfig from '../config/http';
  Vue.prototype.myUploadFn = function (json) {
    let _this = this;
    let formData = json.formData || ''
      ,url = json.url
      ,inputobj = json.inputobj
      ,errorCb = json.errorCb || function(){ }
      ,successCb = json.successCb || function(){ }
      ,abortCb = json.abortCb || function(){ };

    if (!formData || !url) {
      return false;
    }
    if (inputobj[0].files.length == 0) {
      this.myMessage.warning('请选择要上传的文件哦！');
      return false;
    }
    var xhr = new XMLHttpRequest();
    console.log(formData)
    //请求error
    xhr.addEventListener("error", function () {
      !!errorCb && errorCb();
    }, false);
    //请求中断
    xhr.addEventListener("abort", function () {
      !!abortCb && abortCb();
    }, false);
    //发送请求
    // httpConfig.apiHost
    xhr.open("POST", httpConfig.apiHost + url, true);
    // xhr.setRequestHeader('ClientType', 'backmanagesys');
    xhr.setRequestHeader('SessionId', localStorage.getItem("sessionId"));
    xhr.send(formData);
    xhr.onreadystatechange = function (callback) {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var responseText = xhr.responseText;
          var json = $.parseJSON(responseText);
          if (json.status === 0) {
            _this.$set(data,'imgDataUrl',[]);
            inputobj.val('');
            !!successCb && successCb();
          } else {
            !!errorCb && errorCb(json);
          }
        } else {
          !!errorCb && errorCb();
        }
      }
    }
  }
  let data = {
    imgDataUrl: [],
    fileName:''
  };
  export default {
    name: 'com-upload',
    props: {
      'uploadComponentConfig': {
          default: () => {
              return {
                'upfileId': 'upload', //上传input框id
                fileType: '',//强制定义文件类型  -- 验证用
                accept: 'image/*', //接受文件类型  ---  默认'image/*'
                size: '3 * 1024 * 1024', //单个文件大小限制  ---  默认 3M
                numMax: 10,//单次最多上传个数  number 类型
                single: false,//是否只能选择单个文件上传  ----  默认  可以上传多个文件
                imgpreview: false//是否要预览 ---- 上传图片类型才传这个   默认不预览
              }
          }
      }
      
    },
    data() {
      return data;
    },
    mounted() {
      this.initUpload();
    },
    methods: {
      initUpload() {
        let _this = this;
        $('#' + _this.uploadComponentConfig.upfileId).unbind('change').bind('change', function () {
          var $this = $(this);
          var This = this;
          var len = This.files.length;
          var readFileObj = {};
          _this.$set(data,'imgDataUrl',[]);
          if (!!_this.uploadComponentConfig.numMax &&　len > _this.uploadComponentConfig.numMax) {
            _this.myMessage.warning('单次上传不能超过'+_this.numMax +'个文件!')
            $this.val("");
            return;
          }
          if( len > 1 ) {
            _this.fileName = len + '个文件';
          } else if( len == 1 ){
            _this.fileName = This.files[0].name;
          }
          for (var i = 0; i < len; i++) {
            if (!!_this.uploadComponentConfig.size && This.files.item(i).size > _this.uploadComponentConfig.size) {
              _this.myMessage.warning('文件大小不符合！')
              $this.val("");
              return;
            }
            //判断文件类型是否合格
            if (!!_this.uploadComponentConfig.fileType && !eval(_this.uploadComponentConfig.fileType).test(This.files.item(i).name)) {
              _this.myMessage.warning('文件类型不正确！')
              $this.val("");
              _this.fileName = '';
              return;
            }
            //如果要预览
            if( _this.uploadComponentConfig.imgpreview ){
              readFileObj['reader' + i] = new FileReader();
              readFileObj['reader' + i].onload = function(e) {
                  var data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
                  _this.imgDataUrl.push({
                    index: new Date().getTime(),
                    src: data
                  })
              };
              readFileObj['reader' + i].readAsDataURL(This.files.item(i));
            }
          }
          if( _this.uploadComponentConfig.autoUpload && !!_this.uploadComponentConfig.autoUploadUrl ) {
            let inputobj = $('#' + _this.uploadComponentConfig.upfileId);
            let formData = new FormData(inputobj.parents('.' + _this.uploadComponentConfig.upfileId + 'form')[0])
            for( var key in _this.uploadComponentConfig.anotherParam ){
              formData.append(key, _this.uploadComponentConfig.anotherParam[key]);
            }
            _this.myUploadFn({
              inputobj: inputobj,
              formData: formData,
              url: _this.uploadComponentConfig.autoUploadUrl,
              successCb: () => {
                _this.myMessage.success('上传成功！');
                _this.uploadComponentConfig.successCb && _this.uploadComponentConfig.successCb();
              },
              errorCb: () => {
                _this.myMessage.error('上传失败！');
                _this.uploadComponentConfig.errorCb && _this.uploadComponentConfig.errorCb();
              }
            })
          }
        })
      },
      reset () {
        let _this = this;
        $('#' + _this.uploadComponentConfig.upfileId).val('');
        _this.$set(data,'imgDataUrl',[]);
        _this.fileName = '';
      }
    }
  }

</script>
<style scoped>
.upload-wrap {
  border: none;
}
.upload-tip {
  margin: 20px 0;
  float: none;
  color: #3aacd9;
}
.img-preview {
  margin: 20px 0;
  padding: 10px 0 0 10px;
  border: 1px solid #eee;
}
.img-preview img{
  width: 100px;
  height: auto;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #eee;
}
.btn-default {
  cursor: pointer;
}
.upload-btn {
  width: 94px;
  height: 40px;
  position: absolute;
  top: -8px;
  left: 15px;
  z-index: 2;
  outline: 0;
  opacity: 0;
}
</style>


