<template>
  <div class="app-header">
    <ul class="app-header-buttons">
      <li class="visible-mobile">
        <a href="#" class="btn btn-link btn-icon" data-sidebar-toggle=".app-sidebar.dir-left">
          <span class="icon-menu"></span>
        </a>
      </li>
      <li class="hidden-mobile">
        <a href="#" class="btn btn-link btn-icon" data-sidebar-minimize=".app-sidebar.dir-left">
          <span class="icon-list4"></span>
        </a>
      </li>
    </ul>
    <ul class="app-header-buttons pull-right">
      <li>
        <div class="contact contact-rounded contact-bordered contact-lg contact-ps-controls">
          <img src="../assets/images/logo.png" alt="">
          <div class="contact-container">
            <a href="#">{{userName}}</a>
            <span>系统管理员</span>
          </div>
          <div class="contact-controls">
            <div class="dropdown">
              <button type="button" class="btn btn-default btn-icon" data-toggle="dropdown">
                <span class="icon-cog"></span>
              </button>
              <ul class="dropdown-menu dropdown-left">
                <li>
                  <a href="#" @click="logout()">
                    <span class="icon-exit-right"></span> Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'com-header',
  data() {
    return { userName: "" }
  },
  mounted() {
    this.userName = localStorage.userName
  },
  methods: {
    logout() {
      this.$store.dispatch('setLogout');
      // this.$router.push({
      //   path: "/"
      // });
      this.$router.go("/")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
