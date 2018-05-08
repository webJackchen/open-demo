<template>
<div>
  <div>我是首页--首页内容</div>
  <vdialog :isShow="showDialog" :options="dialogOptions" v-on:modalResponse="modalResponse">
    <p>你的手机发的就是对方即可将快递费高考加分的恐惧感</p>
  </vdialog>  
  <button v-on:click="showPromp" type="button">弹窗</button>
  </div>
</template>

<script>
import vdialog from "./dialog";
export default {
  name: 'indexModule',
  data () {
    return {
      msg: '我是首页--首页内容',
      dialogOptions: {
        width: '500px',
        title: '我是标题'
      },
      showDialog: false
    }
  },
  components: {
    vdialog
  },
  methods: {
    showPromp () {
      this.showDialog = true;
    },
    modalResponse (json) {
      if(json.type === 'close'){
        this.showDialog = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
