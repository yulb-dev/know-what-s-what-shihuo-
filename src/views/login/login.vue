<template>
  <div ref="login" class="login">
    <div class="goback">
      <img src="../../assets/img/icon/head_back.png" width="43px" @click="goBack" />
    </div>
    <div class="form">
      <input type="text" v-model="username" placeholder="用户名" />
      <span v-if="namec">4到16位(字母，数字，下划线，减号)</span>
      <input type="password" v-model="password" placeholder="请输入密码" />
      <span v-if="passwordc">最小6位,至少1个大写字母、小写字母、数字、特殊字符</span>
      <span v-if="dlc">{{cwts}}</span>
      <div v-if="isdl" @click="login">立即登录</div>
      <div v-else @click="registered">注册</div>
      <p v-if="isdl" @click="isdl = false">立即注册</p>
      <p v-else @click="isdl = true">立即登录</p>
    </div>
  </div>
</template>
<script>
import { islogin, isregistered, addScarts } from "../../network/login";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      isdl: true,
      namec: false,
      passwordc: false,
      dlc: false,
      cwts: "",
    };
  },
  methods: {
    login() {
      this.username = this.username.replace(/\s+/g, "");
      if (this.username != "" && this.password != "") {
        this.dlc = false;
        islogin(this.username, this.password).then(({ data, data1, data2 }) => {
          if (typeof data == "string") {
            this.cwts = data;
            this.dlc = true;
          } else {
            data.shoppingCart = data1;
            data.Order = data2;
            this.$store.state.user = data;
            this.$router.go(-1);
          }
        });
      } else {
        this.cwts = "用户名或密码不能为空";
        this.dlc = true;
      }
    },
    registered() {
      //中文，英文字母，数字及下划线组成，长度2-20位
      var name = /^[a-zA-Z0-9_-]{4,16}$/;
      //最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      var password = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

      if (name.test(this.username)) this.namec = false;
      else this.namec = true;
      if (password.test(this.password)) this.passwordc = false;
      else this.passwordc = true;
      if (name.test(this.username) && password.test(this.password)) {
        isregistered(this.username, this.password).then((data) => {
          if (data.status == 404) {
            this.cwts = data.data;
            this.dlc = true;
          } else {
            this.$store.state.user = data;
            this.$router.go(-1);
          }
        });
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$refs.login.style.height = window.screen.availHeight + "px";
  },
};
</script>
<style lang="less">
.login {
  position: relative;
  z-index: 999;
  background-color: #fff;
  .goback {
    padding: 10px 10px;
    img {
      display: block;
    }
  }
  .form {
    padding: 20px 20px;
    span {
      display: inline-block;
      font-size: 16px;
      color: #ff4338;
      line-height: 18px;
      letter-spacing: 1px;
      padding-top: 8px;
    }
    input {
      background: none;
      outline: none;
      border: none;
      height: 40px;
      width: 100%;
      padding-left: 6px;
      color: #333;
      caret-color: rgb(192, 191, 191);
      font-size: 17px;
      line-height: 40px;
      font-weight: bold;
      letter-spacing: 1px;
      -webkit-appearance: none;
      border-bottom: 1px solid rgb(209, 208, 208);
      margin-top: 18px;
    }
    div {
      display: block;
      border: none;
      width: 100%;
      height: 44px;
      background-color: #ff4338;
      text-align: center;
      color: #fff;
      font-size: 18px;
      line-height: 44px;
      border-radius: 5px;
      margin-top: 30px;
    }
    p {
      font-size: 16px;
      color: rgb(93, 93, 226);
      width: 100%;
      text-align: right;
      margin-top: 26px;
      letter-spacing: 1px;
    }
  }
}
</style>