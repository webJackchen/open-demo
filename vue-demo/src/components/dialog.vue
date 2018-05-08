<template>
  <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-mask"></div>
      <transition name="drop">
        <div class="dialog-content" :style="{ width: options.width || width, height: options.height || height }"  v-show="isShow">
            <div class="content-hearder" v-if=" !!options.title ">
                <span>{{ options.title }}</span>
                <span class="close" v-on:click="modalResponse('close')">X</span>
            </div>
            <div class="content-body">
                <slot></slot>
            </div>
            <div class="content-footer"></div>
        </div>
      </transition>
  </div>
</template>
<script>
export default {
  name: 'v-dialog',
  props: {
      'options': {
          default: () => {
              return {}
          }
      },
      'isShow': {
          default: false
      },
      'dialogData': {
          default: () => {
              return {}
          }
      }
  },
  data () {
      return {
          width: '400px',
          height: '200px',
      }
  },
  methods: {
      modalResponse (type) {
          this.$emit('modalResponse',{ type: type });
      }
  }
}
</script>
<style scoped>

.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}
.dialog-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 101;
}
.dialog-content {
    position: relative;
    margin: 100px auto 0;
    z-index: 102;
}
.content-hearder {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #00cc66;
    font-size: 16px;
    color: #fff;
}
.content-hearder .close {
    display: inline;
    position: absolute;
    right: 10px;
    top: 0px;
    color: #fff;
} 
.content-body {
    width: 100%;
    height: calc( 100% - 40px );
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;

} 
</style>


