<template>
  <div class="category-page">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">{{$route.query.path}}</div>
      <div slot="right"></div>
    </top-bar>
    <div class="item-list">
      <ul>
        <li v-for="(item1, index) in item" :key="index" @click="change(item1)">
          <img :src="item1.img" :class="{isSelect:name == item1.name}" />
          <p>{{item1.name}}</p>
        </li>
      </ul>
    </div>
    <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop">
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
import { getitem, getGoods } from "../../network/catePage";
export default {
  name: "catePage",
  mixins: [backTop],
  data() {
    return {
      name: "",
      item: [],
      goodsList: [],
      cnum: 0,
    };
  },
  methods: {
    change(item) {
      this.name = item.name;
    },
    imgUp() {
      this.cnum++;
      if (this.cnum == this.goodsList.length) console.log("ok");
      this.$refs.scroll.scroll.refresh();
    },
  },
  created() {
    this.name = this.$route.query.name;
    getitem(this.$route.query).then((data) => {
      this.item = data;
    });
  },
  watch: {
    name(value) {
      getGoods(value).then((data1) => {
        this.goodsList = data1;
      });
    },
  },
  components: {
    MainGoodsList2,
    Scroll,
    TopBar,
  },
};
</script>
<style lang="less">
.category-page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 999;
  .goodslist2 {
    // padding-top: 140px;
    padding: 140px 16px 0 16px;
  }
  .item-list {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    overflow: auto;
    padding: 70px 0 8px 0;
    background-color: #fff;
    box-shadow: 0 1px 15px 0px #b9b9b9;
    ul {
      display: flex;
      li {
        flex: 1;
        margin: 0 10px;
        .isSelect {
          border: 2px solid rgb(184, 184, 184);
        }
        img {
          width: 55px;
          display: block;
          border-radius: 50%;
          border: 2px solid #fff;
          margin: 0 auto;
        }
        p {
          font-size: 10px;
          color: #333;
          margin-top: 10px;
          text-align: center;
          width: 100%;
          word-break: keep-all; /* 不换行 */
          white-space: nowrap; /* 不换行 */
          overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        }
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