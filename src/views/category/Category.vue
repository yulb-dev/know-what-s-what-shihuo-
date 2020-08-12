<template>
  <div class="category">
    <topbar>
      <div slot="center" class="center">
        <i class="iconfont icon-search"></i>
        <i class="iconfont icon-xiangji1"></i>
        <input type="text" placeholder="搜索全网正品好价" />
      </div>
    </topbar>
    <div class="class-box" ref="classBox">
      <main-a-menu @changeAMenu="changeAMenu" />
      <main-secondary-menu :menuName="menuName" />
    </div>
  </div>
</template>
<script>
import Topbar from "../../componets/common/topbar/TopBar";
import MainAMenu from "../../componets/content/MainAMenu/MainAMenu";
import MainSecondaryMenu from "../../componets/content/MainSecondaryMenu/MainSecondaryMenu";

export default {
  data() {
    return {
      menuName: "",
    };
  },
  methods: {
    changeAMenu(menuName) {
      this.menuName = menuName;
    },
  },
  mounted() {
    this.$refs.classBox.style.height = window.screen.availHeight - 60 + "px";
  },
  components: {
    MainSecondaryMenu,
    MainAMenu,
    Topbar,
  },
};
</script>
<style lang="less" scope>
.top-bar {
  // border-bottom: none;
  background-color: #fff;
}
.class-box {
  display: flex;
  height: 100%;
  padding-bottom: 49px;
}
.category {
  .top-bar-center {
    background-color: #fff;
    flex: 1;
    padding: 6px 12px 10px 12px;
    .center {
      width: 100%;
      position: relative;
    }
    .icon-search {
      position: absolute;
      line-height: 35px;
      font-size: 22px;
      color: rgb(117, 116, 116);
      left: 6px;
      top: 0;
    }
    .icon-xiangji1 {
      position: absolute;
      line-height: 35px;
      font-size: 22px;
      color: rgb(117, 116, 116);
      right: 8px;
      top: 0;
    }
    input {
      box-shadow: 0 0 12px 0px #cacaca;
      border-radius: 5px;
      background: none;
      outline: none;
      border: none;
      height: 36px;
      width: 100%;
      padding-left: 34px;
      color: rgb(105, 105, 105);
      caret-color: rgb(90, 90, 90);
      font-size: 14px;
      line-height: 36px;
      letter-spacing: 1px;
      -webkit-appearance: none;
    }
  }
}
</style>