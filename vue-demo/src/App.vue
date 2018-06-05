<template>
  <div>
    <com-message/>
    <div class="app app-loaded" v-if="isLogin">
      <div class="app-container app-header-inside-content">
        <com-sidebar :isLogin="isLogin" />
        <div class="app-content app-sidebar-left">
          <com-header/>
          <com-breadcrumb/>
          <div class="container">
            <div id="app">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
      <com-footer/>
    </div>
    <div v-if="!isLogin">
      <login/>
    </div>
  </div>
</template>

<script>
import comSidebar from '@/components/com-sidebar'
import comHeader from '@/components/com-header'
import comFooter from '@/components/com-footer'
import comBreadcrumb from '@/components/com-breadcrumb'
import comMessage from '@/components/com-message'
import login from './view/login'
export default {
  name: 'App',
  data() {
    return {
      isLogin:false
    }
  },
  mounted() { 
    this.isLogin=this.$store.state.login.isLogin
  },
  components: { comSidebar, comHeader, comFooter, comBreadcrumb, comMessage, login },

}
</script>


<style>
@import "../static/boooya/css/styles.css";
.app {
  overflow: hidden;
}

.app-container {
  height: calc(100vh - 40px);
  min-height: 680px;
}

.app-content {
  height: 100% !important;
}

.container,
#app {
  height: calc(100vh - 180px);
  min-height: 540px;
}

#app>div {
  height: 100%;
  overflow-y: auto;
}
</style>
