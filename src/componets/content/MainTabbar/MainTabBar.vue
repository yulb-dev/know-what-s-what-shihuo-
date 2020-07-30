<template>
  <tag-bar>
    <tag-bar-item path="/home" :selectColor="'black'">
      <p slot="content">首页</p>
      <i
        :class="{'iconfont':true ,'icon-shouye1':!(isactive=='/home'),'icon-shouye2':isactive=='/home'}"
        slot="icon"
      ></i>
    </tag-bar-item>
    <tag-bar-item path="/category" :selectColor="'black'">
      <p slot="content">分类</p>
      <i
        :class="{'iconfont':true ,'icon-tubiaozhizuomoban':!(isactive=='/category'),'icon-fenlei':isactive=='/category'}"
        slot="icon"
      ></i>
    </tag-bar-item>
    <tag-bar-item path="/shopcart" :selectColor="'black'">
      <p slot="content">购物车</p>
      <i
        :class="{'iconfont':true ,'icon-icon4':!(isactive=='/shopcart'),'icon-gouwuche1':isactive=='/shopcart'}"
        slot="icon"
      ></i>
    </tag-bar-item>
    <!-- 这是一种方法
    <tag-bar-item path="/profile" :class="{issel:isactive=='/profile'}">
      <p slot="content">我的</p>
      <i class="iconfont icon-wode2" slot="icon"></i>
    </tag-bar-item>-->
    <tag-bar-item path="/profile" :selectColor="'black'">
      <p slot="content">我的</p>
      <i
        :class="{'iconfont':true ,'icon-wode':!(isactive=='/profile'),'icon-wode1':isactive=='/profile'}"
        slot="icon"
      ></i>
    </tag-bar-item>
  </tag-bar>
</template>
<script>
import TagBar from "../../common/tabbar/tabbar";
import TagBarItem from "../../common/tabbar/TabbarItem";
export default {
  data() {
    return {};
  },
  computed: {
    isactive() {
      return this.$route.path;
    },
  },
  components: {
    TagBar,
    TagBarItem,
  },
};
</script>
<style lang="less">

#tag-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
</style>