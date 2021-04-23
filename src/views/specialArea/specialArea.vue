<template>
  <div class="special-area">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">
        {{ $route.query.title1 }} &bull; {{ $route.query.title2 }}
      </div>
      <div slot="right"></div>
    </top-bar>
    <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop">
      <main-goods-list2 :goodsList="itemList" @imgUp="imgUp" />
    </scroll>
    <back-top @click.native="backlick" v-show="isShow" />
  </div>
</template>
<script>
import MainGoodsList2 from "../../componets/content/MainGoodsList2/MainGoodsList2";
import TopBar from "../../componets/common/topbar/TopBar";
import Scroll from "../../componets/common/Scroll/Scroll";
import { backTop } from "../../common/mixin";
import { getSa } from "../../network/favorites";
export default {
  name: "specialArea",
  mixins: [backTop],
  data() {
    return {
      itemList: [],
      cnum: 0,
    };
  },
  methods: {
    imgUp() {
      this.cnum++;
      if (this.cnum == this.itemList.length + 1)
        this.$refs.scroll.scroll.refresh();
    },
  },
  created() {
    getSa(this.$route.query.title1, this.$route.query.id).then(({ data }) => {
      this.itemList = data;
    });
  },
  components: {
    MainGoodsList2,
    Scroll,
    TopBar,
  },
};
</script>
<style lang="less">
.special-area {
  .content {
    padding-top: 53px;
  }
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  background-color: #fff;
  .top-bar {
    z-index: 999;
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