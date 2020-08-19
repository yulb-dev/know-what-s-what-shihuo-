<template>
  <div class="settings-page">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">个人资料</div>
      <div slot="right"></div>
    </top-bar>
    <div class="avatar">
      <img :src="avatar" />
      <div class="ifile">
        <p>更换头像</p>
        <label>
          <input type="file" ref="fileint" @change="uploadImg" />
        </label>
      </div>
    </div>
    <div class="name">
      <input type="text" v-model="name" />
      <span v-if="isShow">{{text}}</span>
      <button @click="tj">确认</button>
    </div>
    <alert-box v-show="ab" :boxContent="boxContent" />
  </div>
</template>
<script>
import TopBar from "../../componets/common/topbar/TopBar";
import { getf, cname } from "../../network/settingsPage";
import { box } from "../../common/mixin";
export default {
  name: "settings",
  mixins: [box],
  data() {
    return {
      avatar: "",
      name: "",
      num: 0,
      text: "",
      isShow: false,
    };
  },
  methods: {
    tj() {
      var name = /^[a-zA-Z0-9_-]{4,16}$/;
      if (this.num) {
        if (name.test(this.name)) {
          const data = new FormData();
          data.append("file", this.$refs.fileint.files[0]);
          data.append("name", this.name);
          data.append("id", this.$store.state.user._id);
          getf(data).then((data) => {
            if (data.status == 200) {
              this.text = "用户名已存在";
              this.isShow = true;
            } else {
              this.$store.state.user.avatar = data.avatar;
              this.$store.state.user.name = data.name;
              this.box("修改成功");
              this.$router.go(-1);
            }
          });
        } else {
          this.text = "4到16位(字母，数字，下划线，减号)";
          this.isShow = true;
        }
      } else {
        if (name.test(this.name)) {
          cname(this.$store.state.user._id, this.name).then((data) => {
            if (data.status == 200) {
              this.text = "用户名已存在";
              this.isShow = true;
            } else {
              this.$store.state.user.name = this.name;
              this.box("修改成功");
              this.$router.go(-1);
            }
          });
        } else {
          this.text = "4到16位(字母，数字，下划线，减号)";
          this.isShow = true;
        }
      }
    },
    uploadImg(e) {
      this.num++;
      let _this = this;
      let files = e.target.files[0];
      if (!e || !window.FileReader) return; // 是否支持 FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function () {
        _this.avatar = this.result;
      };
    },
  },
  created() {
    this.avatar = this.$store.state.user.avatar;
    this.name = this.$store.state.user.name;
  },
  components: {
    TopBar,
  },
};
</script>
<style lang="less">
.settings-page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 999;
  .name {
    width: 88%;
    margin: 40px auto;
    text-align: center;
    span {
      display: block;
      color: crimson;
      text-align: left;
      line-height: 20px;
      font-size: 16px;
      margin-top: 10px;
    }
    button {
      display: inline-block;
      width: 100px;
      text-align: center;
      background: none;
      outline: none;
      border: none;
      background-color: crimson;
      color: #fff;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 32px;
      border-radius: 4px;
      margin-top: 20px;
    }
    input {
      box-shadow: 0 0 12px 0px #cacaca;
      border-radius: 5px;
      background: none;
      outline: none;
      border: none;
      height: 36px;
      width: 100%;
      padding-left: 10px;
      color: rgb(75, 75, 75);
      caret-color: rgb(90, 90, 90);
      font-size: 14px;
      line-height: 36px;
      letter-spacing: 1px;
      -webkit-appearance: none;
    }
  }
  .avatar {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 166px;
      height: 166px;
      margin-right: 30px;
      border-radius: 50%;
      border: 3px solid rgb(168, 168, 168);
    }
    .ifile {
      color: rgb(73, 73, 73);
      border: 1px solid rgb(116, 116, 116);
      border-radius: 15px;
      padding: 0 10px;
      overflow: hidden;
      position: relative;
      font-size: 16px;
      text-align: center;
      line-height: 32px;
      font-family: "微软雅黑";
      input {
        position: absolute;
        left: 0;
        top: 0;
        height: 26px;
        opacity: 0;
      }
    }
  }
  .top-bar {
    z-index: 999;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .top-bar-right {
    width: 43px;
  }
  .top-bar-center {
    line-height: 43px;
    color: #333;
    font-weight: bolder;
    font-size: 19px;
  }
}
</style>