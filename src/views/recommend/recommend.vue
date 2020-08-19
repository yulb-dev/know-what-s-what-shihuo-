<template>
  <div class="recommend">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">{{title}}</div>
      <div slot="right">
        <img src="../../assets/img/icon/head_list.png" width="43px" @click="sBox" />
        <div class="box" v-if="isBox">
          <ul>
            <li @click="$router.replace('/home')">
              <img
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/homepage-icon_605ed60.png"
              />
              <span>首页</span>
            </li>
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
      <div class="head-img">
        <img
          src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png"
        />
      </div>
      <div class="logoList">
        <div v-for="(item, index) in logoList" :key="index" @click="goSa(item)">
          <img :src="item.img" />
          <p>{{item.name}}</p>
        </div>
      </div>
      <main-goods-list2 :goodsList="goodsList" @imgUp="imgUp" />
    </scroll>
    <back-top @click.native="backlick" v-show="isShow" />
  </div>
</template>
<script>
import TopBar from "../../componets/common/topbar/TopBar";
import Scroll from "../../componets/common/Scroll/Scroll";
import MainGoodsList2 from "../../componets/content/MainGoodsList2/MainGoodsList2";
import { reqLogo, reqGoods } from "../../network/recommend";
import { backTop } from "../../common/mixin";
export default {
  name: "recommend",
  mixins: [backTop],
  data() {
    return {
      isBox: false,
      title: "",
      logoList: [],
      goodsList: [],
      num: 0,
    };
  },
  methods: {
    goSa(item) {
      this.$router.push({
        path: "/specialArea",
        query: {
          title1: this.$route.query.name,
          title2: item.name,
          id: item._id,
        },
      });
    },
    imgUp() {
      this.num++;
      if (this.num == this.goodsList.length) this.$refs.scroll.scroll.refresh();
    },
    sBox() {
      this.isBox = !this.isBox;
    },
  },
  created() {
    this.title = this.$route.query.title;
    reqLogo(this.$route.query.name).then((data) => {
      reqGoods(this.$route.query.name).then((data1) => {
        this.logoList = data;
        this.goodsList = data1;
      });
    });
  },
  components: {
    MainGoodsList2,
    TopBar,
    Scroll,
  },
};
</script>
<style lang="less">
.recommend {
  position: relative;
  z-index: 999;
  background-color: #fff;
  .top-bar-right {
    position: relative;
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

  .goodslist2 {
    padding: 0 16px 26px 16px;
  }
  .head-img {
    width: 100%;
    padding: 62px 8px 0 8px;
    img {
      display: block;
      width: 100%;
      border-radius: 4px;
    }
  }
  .logoList {
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 20%;
      img {
        width: 100%;
        display: block;
      }
      p {
        color: #333;
        font-weight: bold;
        font-size: 13px;
        text-align: center;
        line-height: 13px;
        padding: 8px 0;
        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis;
      }
    }
  }
  .top-bar {
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .top-bar-center {
    line-height: 43px;
    color: #333;
    font-weight: bolder;
    font-size: 19px;
  }
}
</style>