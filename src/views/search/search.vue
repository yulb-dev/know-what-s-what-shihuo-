<template>
  <div class="search">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
    </top-bar>
    <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop">
      <div class="ts" v-if="goodsList.length != 0">为您搜索到以下商品:</div>
      <div class="ts" v-else>抱歉，没有找到</div>
      <main-goods-list2 :goodsList="goodsList" @imgUp="imgUp" />
    </scroll>
    <back-top @click.native="backlick" v-show="isShow" />
  </div>
</template>
<script>
import MainGoodsList2 from "../../componets/content/MainGoodsList2/MainGoodsList2";
import TopBar from "../../componets/common/topbar/TopBar";
import Scroll from "../../componets/common/Scroll/Scroll";
import { backTop } from "../../common/mixin";
import { getGoods } from "../../network/search";
export default {
  name: "search",
  mixins: [backTop],
  data() {
    return {
      goodsList: [],
      cnum: 0,
    };
  },
  methods: {
    imgUp() {
      this.cnum++;
      if (this.cnum == this.goodsList.length)
        this.$refs.scroll.scroll.refresh();
    },
  },
  created() {
    getGoods(this.$route.query.text).then(({ data }) => {
      this.goodsList = data;
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
.search {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  background-color: #fff;
  .ts {
    font-weight: bold;
    padding-top: 66px;
    color: #333;
    font-size: 16px;
    padding-left: 20px;
  }
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