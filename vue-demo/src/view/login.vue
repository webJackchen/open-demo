<template>
  <div class="app app-fh">

    <!-- START APP CONTAINER -->
    <div class="app-container" style="background: url(static/boooya/img/bg-1.jpg) no-repeat;background-size:cover;">

      <div class="app-login-box">

        <div class="app-login-box-user"><img src="static/boooya/img/user/no-image.png"></div>
        <div class="app-login-box-title">
          <div class="title">开放平台管理系统</div>
          <!--<div class="subtitle">开放平台管理系统</div>-->
        </div>
        <div class="app-login-box-container">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" v-model="username" id="username" name="login" placeholder="用户名">
              <span class="error"></span>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" id="password" name="password" placeholder="密码">
              <span class="error"></span>
            </div>
            <div class="form-group">
              <div class="row">
                <!--<div class="col-md-6 col-xs-6">
                    <div class="app-checkbox">
                      <label><input type="checkbox" name="app-checkbox-1" value="0"> 记住账号</label>
                    </div>
                  </div>-->
                <div class="col-md-12 col-xs-12">
                  <button class="btn btn-success btn-block" type="button" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="app-login-box-footer">
          &copy; 2018.
        </div>
      </div>

    </div>
    <!-- END APP CONTAINER -->

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return { username: "", password: "" }
  },
  mounted() {
    let _this = this;
    $('.app-login-box-container').keypress(function(e) {
      if (e.which == 13) {
        _this.login()
        return false;
      }
    });
  },
  methods: {
    formValidate() {
      let objArr = [$('#username'), $('#password')];
      let _username = window.formValidation({
        obj: objArr[0],
        empty: '请输入用户名'
      });
      let _password = window.formValidation({
        obj: objArr[1],
        empty: '请输入密码'
      });
      objArr.forEach(function(element) {
        element.blur();
      })
      return _username.tag && _password.tag
    },
    login() {
      let _this = this;
      if (!_this.formValidate()) { return; }
      let userInfo = {
        name: _this.username,
        password: _this.password
      }
      _this.$axios.post('user/login', userInfo).then(function(result) {
        if (result.status == 0) {
          let sessionInfo = {
            sessionId: result.sessionId,
            userId: result.data.userId,
            userName:result.data.userName
          }
          _this.$store.dispatch('setLoginStatus', sessionInfo);
          _this.$router.go(0)
        } else {
          _this.myMessage.error(result.data);
        }
      }).catch(function(err) {
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-container {
  min-height: 900px;
}

.app .app-login-box {
  margin-top: 100px;
}

.app-login-box-container .error {
  color: red;
}
</style>
