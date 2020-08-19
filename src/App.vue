<template>
  <div id="app">
    <keep-alive
      exclude="Detail,login,recommend,favorites,order,specialArea,search,catePage,settings"
    >
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./componets/content/MainTabbar/MainTabBar";
import MainInfo from "./componets/content/MainInfo/MainInfo";
export default {
  name: "App",
  components: {
    MainTabBar,
    MainInfo,
  },
};
</script>

<style lang="less">
@import "./assets/css/icon/iconfont.css";
@import "./assets/css/base.css";
#app {
  width: 100%;
  height: 100%;
}
</style>
