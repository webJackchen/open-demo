<template>
    <div>
        <transition name="fade">
            <div class="app-statusbar app-statusbar-top" :class="['app-statusbar-'+ messageData.type]" v-if="showMsg">
                <div class="app-statusbar-text">{{ messageData.msg }}</div>
                <div class="app-statusbar-close fa fa-times" @click="closeMsg"></div>
            </div>
        </transition>
    </div>
</template>
<script>
  import Vue from 'vue'
  import eventBus from '../utils/eventBus'
  let _emitFn = ( type, msg ) => {
    eventBus.$emit('eventMsg',{
      type: type,
      msg: msg
    })
  }
  Vue.prototype.myMessage = {
    info: ( msg ) => {
      _emitFn( 'info', msg );
    },
    success: ( msg ) => {
      _emitFn( 'success', msg );
    },
    error:  ( msg ) => {
      _emitFn( 'danger', msg );
    },
    warning: ( msg ) => {
      _emitFn( 'warning', msg );
    }
  };

  let data = {
    messageData:{
        msg: 'bxcbxcb',
        type: 'info'
    }, 
    showMsg: false
  }
  export default {
    data() {
      return data
    },
    mounted() {
      this.getEventData();
    },
    methods: {
      getEventData () { //获取来自列表的数据
        eventBus.$off('eventMsg').$on('eventMsg', (obj) => {
          this.$set(data, 'messageData', obj);
          this.showMsg = true;
          clearTimeout( this.autoClose );
          this.autoClose ();
        });
      },
      closeMsg () {//关闭msg
        this.showMsg = false;
        clearTimeout( this.autoClose );
      },
      autoClose () {
          return setTimeout(() => {
              this.showMsg = false;
          }, 2000);
      }
    }
  }
</script>
<style scoped>
.app-statusbar.app-statusbar-top {
    display: block;
    z-index: 1000;
}
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter {
    opacity: 0;
}
.fade-leave-active {
    opacity: 0;
}
.app-statusbar-text {
  text-align: center;
  float: none;
}
</style>

