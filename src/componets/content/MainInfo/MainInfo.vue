<template>
  <transition>
    <div class="info" v-if="swiperItem">
      <top-bar>
        <div slot="left" @click="$emit('shutInfo');isBox = false">
          <img src="../../../assets/img/icon/head_back.png" width="43px" />
        </div>
        <div slot="center">{{swiperItem.item.title}}</div>
        <div slot="right">
          <img src="../../../assets/img/icon/head_list.png" width="43px" @click="sBox" />
          <div class="box" v-if="isBox">
            <ul>
              <li @click="$router.push('/profile')">
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/user-center-icon_77dfd45.png"
                />
                <span>我的</span>
              </li>
            </ul>
          </div>
        </div>
      </top-bar>
      <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop">
        <img :src="swiperItem.item.bcg" class="bcg" ref="bcg" @load="imgUp" />
        <div class="block">
          <h2>{{swiperItem.item.title2}}</h2>
          <main-goods-list2 :goodsList="swiperItem.data" @imgUp="imgUp" />
        </div>
      </scroll>
      <back-top @click.native="backlick" v-show="isShow" />
    </div>
  </transition>
</template>

<script>
import MainGoodsList2 from "../../content/MainGoodsList2/MainGoodsList2";
import TopBar from "../../common/topbar/TopBar";
import Scroll from "../../common/Scroll/Scroll";
import { backTop } from "../../../common/mixin";
export default {
  mixins: [backTop],
  data() {
    return {
      cnum: 0,
      isBox: false,
    };
  },
  props: {
    swiperItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    sBox() {
      this.isBox = !this.isBox;
    },
    imgUp() {
      this.cnum++;
      if (this.cnum == this.swiperItem.data.length + 1)
        this.$refs.scroll.scroll.refresh();
    },
  },
  mounted() {},
  components: {
    MainGoodsList2,
    TopBar,
    Scroll,
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
  .top-bar-right {
    .box {
      width: 130px;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      right: 10px;
      top: 40px;
      &::before {
        position: absolute;
        content: "";
        right: 6px;
        top: -6px;
        border-bottom: 6px solid rgba(0, 0, 0, 0.7);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      }
      li {
        color: #fff;
        letter-spacing: 1px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 19px;
          display: inline-block;
        }
        span {
          font-size: 14px;
          line-height: 42px;
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
  .bcg {
    width: 100%;
    transition: 0.4s all;
    display: block;
    padding-top: 50px;
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
