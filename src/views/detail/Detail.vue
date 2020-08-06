<template>
  <div id="detail" v-if="item">
    <top-bar>
      <div slot="left" @click="goback">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">
        <span
          v-for="(item, index) in btList"
          :key="index"
          :class="{isActive:index == clickIndex}"
          @click="cIndex(index)"
        >{{item}}</span>
      </div>
    </top-bar>
    <scroll ref="scroll" :hideShowBackTop="true" @goTop="goTop" @pullingUp="pullingUp">
      <swiper
        v-if="change"
        :imglist="item.parameter[1].value[colorIndex].img"
        @ctoItemDetails="ctoItemDetails"
        ref="swiper"
      />
      <main-goods-detail :goods="goods" @imgListChange="imgListChange" />
      <div class="imglist">
        <h2>内容精选 (9)</h2>
        <ul v-if="item">
          <li v-for="(item1, index) in item.imglist" :key="index">
            <img :src="item1" @load="imgUp" />
          </li>
        </ul>
      </div>
      <div class="goods-comments">
        <span class="qwkb">+&nbsp;添加口碑</span>
        <h2>
          全网口碑
          <span>(388)</span>
        </h2>
        <a
          href="#"
          v-for="(item, index) in ['鞋子好看','鞋码偏小','穿起来舒服']"
          :key="index"
          class="bq"
        >{{item}}</a>
        <div class="comment-detail" v-for="(item1, index) in item.comments" :key="index+999">
          <img :src="item1.useravatar" width="10px" height="10px" />
          <span>{{item1.createtime | formatdate('yyyy-mm-dd')}}</span>
          <p class="username">{{item1.username}}</p>
          <p class="content">{{item1.usercomment}}</p>
        </div>
      </div>
      <div class="goods-content">
        <h2>鞋款介绍</h2>
        <img src="../../assets/img/bcgg/bcgg2.png" />
        <ul>
          <li v-for="(item1, index) in item&&item.parameter[1].value[colorIndex].img" :key="index">
            <img :src="item1" alt />
          </li>
        </ul>
      </div>
      <div class="recommend">
        <h2>更多商品推荐</h2>
        <main-goods-list2 :goodsList="recommendList" />
      </div>
    </scroll>
    <back-top @click.native="backlick" v-show="isShow" />
  </div>
</template>
<script>
import MainGoodsDetail from "../../componets/content/MainGoodsDetail/MainGoodsDetail";
import Swiper from "../../componets/common/swiper/swiper2";
import TopBar from "../../componets/common/topbar/TopBar";
import Scroll from "../../componets/common/Scroll/Scroll";
import BackTop from "../../componets/common/BackTop/BackTop";
import MainGoodsList2 from "../../componets/content/MainGoodsList2/MainGoodsList2";
import { getGoodsDetail, Goods, getRecommendList } from "../../network/Detail";
export default {
  name: "Detail",
  data() {
    return {
      recommendList: null,
      imgUpNum: 0,
      change: true,
      isShow: false,
      goods: null,
      item: null,
      btList: ["商品", "参数", "评论", "推荐"],
      clickIndex: 0,
      colorIndex: 0,
    };
  },
  filters: {
    formatdate(time, t = "") {
      var data = new Date(time);
      var y = data.getFullYear();
      var n = data.getMonth() + 1;
      var d = data.getDate();
      var h = data.getHours();
      var m = data.getMinutes();
      if (t == "yyyy-mm-dd") {
        return `${y}-${n}-${d}`;
      }
      return `${y}-${n}-${d} ${h}:${m}`;
    },
  },
  methods: {
    imgUp() {
      this.imgUpNum++;
      if (this.imgUpNum == this.item.imglist.length)
        this.$refs.scroll.scroll.refresh();
    },
    imgListChange(index) {
      this.colorIndex = index;
      this.change = false;
      setTimeout(() => {
        this.change = true;
      });
    },
    ctoItemDetails(item) {},
    goback() {
      this.$router.go(-1);
    },
    cIndex(index) {
      this.clickIndex = index;
    },
    pullingUp() {},
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
  created() {
    getGoodsDetail(this.$route.query.id).then((data) => {
      this.item = data;
      this.goods = new Goods(data);
      getRecommendList(data.recommend).then((data1) => {
        this.recommendList = data1;
      });
    });
  },
  components: {
    MainGoodsList2,
    MainGoodsDetail,
    TopBar,
    Swiper,
    Scroll,
    BackTop,
  },
};
</script>
<style lang="less" scoped>
.recommend {
  h2 {
    color: #333;
    font-size: 17px;
    line-height: 17px;
    padding: 30px 0 20px 12px;
  }
  ul {
    background-color: rgb(245, 244, 244);
    padding: 4px 4px;
  }
}
.goods-comments {
  padding: 12px 12px 26px 12px;
  border-bottom: 0.6px solid rgb(245, 244, 244);
  .comment-detail {
    margin-top: 20px;
    span {
      float: right;
      font-size: 12px;
      line-height: 20px;
      color: rgb(150, 150, 150);
    }
    img {
      display: block;
      float: left;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .username {
      padding-left: 26px;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 1px;
      color: rgb(104, 104, 104);
    }
    .content {
      margin-top: 8px;
      font-size: 14px;
      color: #333;
      letter-spacing: 1px;
      line-height: 22px;
    }
  }
  .qwkb {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 1px;
    padding: 0 6px;
    color: rgb(129, 129, 129);
    border: 0.6px solid rgb(233, 233, 233);
    float: right;
    margin-top: 10px;
  }
  h2 {
    color: #333;
    font-size: 17px;
    line-height: 48px;
    padding-bottom: 8px;
    span {
      font-size: 13px;
      font-weight: normal;
    }
  }
  .bq {
    display: inline-block;
    font-size: 13px;
    color: rgb(80, 80, 80);
    line-height: 28px;
    text-decoration: none;
    padding: 0 10px;
    letter-spacing: 1px;
    background-color: rgb(253, 234, 237);
    margin-right: 10px;
    border-radius: 2px;
  }
}
.goods-content {
  padding-top: 10px;
  width: 100%;
  border-bottom: 0.6px solid rgb(238, 237, 237);
  img {
    width: 100%;
    display: block;
  }
  h2 {
    padding-left: 12px;
    color: #333;
    font-size: 17px;
    line-height: 48px;
    padding-bottom: 20px;
  }
  ul {
    width: 100%;
    li {
      width: 100%;
    }
  }
}
#detail {
  background-color: #fff;
  position: relative;
  z-index: 999;
}
.imglist {
  width: 100%;
  padding: 10px 0 40px 0;
  border-bottom: 0.6px solid rgb(245, 244, 244);
  h2 {
    padding-left: 12px;
    color: #333;
    font-size: 17px;
    line-height: 48px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    width: 33.2%;
    padding-bottom: 0.6px;
    img {
      display: block;
      width: 100%;
    }
  }
}
.swiper-container {
  --swiper-pagination-color: #ff4338; /* 两种都可以 */
  margin-top: -6%;
}

.isActive {
  color: #ff4338;
}
.top-bar {
  background-color: #fff;
  border-bottom: none;
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
  color: #333;
  text-align: center;
  span {
    line-height: 43px;
    margin-right: 20px;
  }
  flex: 1;
  line-height: 43px;
  font-size: 15px;
}
</style>