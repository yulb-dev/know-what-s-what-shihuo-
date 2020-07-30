<template>
  <transition>
    <div class="info">
      <top-bar>
        <div slot="left" @click="$emit('shutInfo')">
          <img src="../../../assets/img/icon/head_back.png" width="43px" />
        </div>
        <div slot="center" v-if="swiperItem">{{swiperItem.item.title}}</div>
        <div slot="right">
          <img src="../../../assets/img/icon/head_list.png" width="43px" />
        </div>
      </top-bar>
      <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop">
        <img :src="swiperItem&&swiperItem.item.bcg" class="bcg" ref="bcg" />
        <div class="block">
          <h2>{{swiperItem&&swiperItem.item.title2}}</h2>
          <main-goods-list2 :goodsList="swiperItem&&swiperItem.data"></main-goods-list2>
        </div>
      </scroll>
      <back-top @click.native="backlick" v-show="isShow" />
    </div>
  </transition>
</template>

<script>
// import BScroll from "better-scroll";

import MainGoodsList2 from "../../content/MainGoodsList2/MainGoodsList2";
import TopBar from "../../common/topbar/TopBar";
import Scroll from "../../common/Scroll/Scroll";
import BackTop from "../../common/BackTop/BackTop";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    goTop(isShow) {
      this.isShow = isShow;
    },
    backlick() {
      // 通过 @click.native 监听点击组件事件
      //可以通过 子 ->父 传值在 scroll生命周期函数中将 scroll 实例传递给父组件，
      //父组件创建对象保存，父组件再通过backlick调用scroll的scrollTo方法返回顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
  },
  props: {
    swiperItem: {
      type: Object,
      default() {
        return {
          scroll: null,
        };
      },
    },
  },
  created() {},
  mounted() {
  },
  components: {
    MainGoodsList2,
    TopBar,
    Scroll,
    BackTop,
  },
};
</script>

<style lang="less">
.v-enter,
.v-leave-to {
  transform: translateX(100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
.info {
  .wrapper {
    overflow: hidden;
    width: 100%;
    .content {
      padding-bottom: 10px;
    }
  }
  background-color: #c31a0d;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  .top-bar {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .top-bar-left {
    img {
      display: block;
    }
  }
  .top-bar-center {
    line-height: 43px;
    color: #333;
    font-weight: bolder;
    font-size: 19px;
  }
  .bcg {
    width: 100%;
    transition: 0.4s all;
    display: block;
    padding-top: 46px;
  }
  .block {
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    padding: 7px;
    box-shadow: 2px 3px 7px 0 rgba(0, 0, 0, 0.15);
    margin-top: 10px;
    border-radius: 5px;
    h2 {
      color: #333333;
      font-size: 23px;
      line-height: 60px;
      text-align: center;
    }
  }
}
</style>
