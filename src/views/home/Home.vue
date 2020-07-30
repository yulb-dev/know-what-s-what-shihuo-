<template>
  <div class="body">
    <main-nav-bar>
      <div slot="left">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="裂变6" />
      </div>
      <div slot="right">
        <i class="iconfont icon-xiangji1"></i>
        <p>拍照搜</p>
      </div>
    </main-nav-bar>
    <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop" @pullingUp="pullingUp">
      <swiper :imglist="imglist" @click.native="ctoItemDetails" ref="swiper" />
      <main-recomm :recoImgList="recoImgList" />
      <main-activity />
      <main-switch @cswitch="cswitch" />
      <main-goods-list :goodsList="this.goods[sle].list" />
    </scroll>
    <back-top @click.native="backlick" v-show="isShow" />
    <main-info v-show="infoIsShow" :swiperItem="swiperItem" @shutInfo="shutInfo"></main-info>
  </div>
</template>
<script>
import MainSwitch from "../../componets/content/MainSwitch/MainSwitch";
import MainNavBar from "../../componets/common/navbar/Navbar";
import MainRecomm from "../../componets/content/MainRecomm/MainRecomm";
import MainActivity from "../../componets/content/MainActivity/MainActivity";
import MainGoodsList from "../../componets/content/MainGoodsList/MainGoodsList";

import MainInfo from "../../componets/content/MainInfo/MainInfo";
import BackTop from "../../componets/common/BackTop/BackTop";
import Scroll from "../../componets/common/Scroll/Scroll";

import Swiper from "../../componets/common/swiper/Swiper";
// import Activity from "../../componets/common/activity/activity";
import { swiperreq, recommreq, getPopularList } from "../../network/homereq";
export default {
  data() {
    return {
      swiperItem: null,
      infoIsShow: false,
      isShow: false,
      imglist: [],
      recoImgList: [],
      sle: "popular",
      goods: {
        popular: { page: 1, list: [] },
        new: { page: 1, list: [] },
        featured: { page: 1, list: [] },
      },
    };
  },
  created() {
    // 尽量在生命周期函数中调用 methods 里的方法
    swiperreq().then((data) => {
      data.push(data[0]);
      data.unshift(data[data.length - 2]);
      this.imglist = data;
    });
    recommreq().then((data) => {
      this.recoImgList = data;
    });
    this.getpopularList();
    this.getnewList();
    this.getfeaturedList();
  },
  methods: {
    shutInfo() {
      this.infoIsShow = false;
    },
    ctoItemDetails() {
      // 进入 swiper 详情页
      this.getswiperItem(this.$refs.swiper.swiperItem.name, (data) => {
        this.swiperItem = {
          data,
          item: this.$refs.swiper.swiperItem,
        };
      });
      this.infoIsShow = true;
    },
    pullingUp() {
      // console.log("ok");
      this["get" + this.sle + "List"]();
    },
    goTop(isShow) {
      this.isShow = isShow;
    },
    backlick() {
      // 通过 @click.native 监听点击组件事件
      //可以通过 子 ->父 传值在 scroll生命周期函数中将 scroll 实例传递给父组件，
      //父组件创建对象保存，父组件再通过backlick调用scroll的scrollTo方法返回顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    cswitch(sle) {
      this.sle = sle;
    },
    getpopularList() {
      getPopularList({
        url: "goods",
        params: {
          class: "篮球",
          page: this.goods.popular.page,
        },
      }).then((data) => {
        this.goods.popular.list = data;
        this.goods.popular.page += 1;
      });
    },
    getnewList() {
      getPopularList({
        url: "goods",
        params: {
          class: "新款",
          page: this.goods.popular.page,
        },
      }).then((data) => {
        this.goods.new.list = data;
        this.goods.new.page += 1;
      });
    },
    getfeaturedList() {
      getPopularList({
        url: "goods",
        params: {
          class: "精选",
          page: this.goods.popular.page,
        },
      }).then((data) => {
        this.goods.featured.list = data;
        this.goods.featured.page += 1;
      });
    },
    getswiperItem(name, callback) {
      getPopularList({
        url: "goods",
        params: {
          class: name,
          page: 1,
        },
      }).then((data) => {
        callback(data);
      });
    },
  },
  components: {
    MainSwitch,
    MainNavBar,
    MainRecomm,
    MainActivity,
    MainGoodsList,
    MainInfo,
    Swiper,
    Scroll,
    BackTop,
    // Activity,
  },
};
</script>
<style lang="less">
.swiper-wrapper {
  padding-top: 46px;
}
.body {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 7px;
}
.nav-bar {
  z-index: 100;
  padding: 0 7px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.left {
  i {
    font-size: 22px;
    position: absolute;
    left: 14px;
    color: rgb(255, 70, 70);
  }
  line-height: 44px;
  input {
    background: none;
    outline: none;
    border: none;
    height: 32px;
    width: 100%;
    border: 1px solid rgb(216, 215, 215);
    padding-left: 34px;
    color: rgb(105, 105, 105);
    caret-color: rgb(255, 70, 70);
    font-size: 16px;
    -webkit-appearance: none;
  }
}
.right {
  div {
    padding-top: 3px;
    padding-left: 3px;
  }
  p {
    color: rgb(134, 134, 134);
    font-size: 10px;
    letter-spacing: 1px;
  }
  i {
    font-size: 20px;
    color: rgb(104, 104, 104);
  }
}
</style>