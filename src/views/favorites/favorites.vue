<template>
  <div class="favorites" ref="favorites">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">我的收藏夹</div>
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
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in $store.state.user.Favorites"
          :key="index"
          @click="goDetail(item.goodsid)"
        >
          <img :src="item.img" />
          <div class="inm">
            <p>{{item.name}}</p>
            <p>颜色：{{item.color}}</p>
            <p>尺码：{{item.size}}</p>
            <p>
              ￥
              <span>{{item.price}}</span>
            </p>
          </div>
          <div class="btn">
            <div class="sc" @click.stop="delFavorites(item)">删除</div>
            <div class="ljgm" @click.stop="goBuy(item)">立即购买</div>
          </div>
        </li>
        <div class="bot">到底啦~~</div>
      </ul>
    </div>
    <alert-box v-show="ab" :boxContent="boxContent" />
  </div>
</template>
<script>
import { box } from "../../common/mixin";
import { reqFavorites } from "../../network/favorites";
import TopBar from "../../componets/common/topbar/TopBar";
import { unFavorite } from "../../network/Detail";
import { buyNow } from "../../network/favorites";
export default {
  name: "favorites",
  mixins: [box],
  data() {
    return {
      isBox: false,
    };
  },
  methods: {
    goBuy(item) {
      //删除收藏夹中数据
      this.$store.commit("unFavorite", item);
      unFavorite(this.$store.state.user._id, item, item.id);
      //将数据添加进用户订单列表
      var obj = {
        userid: this.$store.state.user._id,
        olist: [item],
        tprice: item.price,
      };
      buyNow(obj).then((data) => {
        this.$store.state.user.Order.push(data);
      });
      this.box("购买成功！");
    },
    goDetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
    delFavorites(item) {
      this.$store.commit("unFavorite", item);
      unFavorite(this.$store.state.user._id, item, item.id);
      this.box("取消收藏");
    },
    sBox() {
      this.isBox = !this.isBox;
    },
  },
  mounted() {
    this.$refs.favorites.style.height = window.screen.availHeight + "px";
  },
  components: {
    TopBar,
  },
};
</script>
<style lang="less">
.favorites {
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #fff;
    ul {
      width: 100%;
      padding-top: 53px;
      .bot {
        width: 100%;
        text-align: center;
        line-height: 38px;
        font-size: 16px;
        font-weight: bold;
        color: rgb(180, 180, 180);
        letter-spacing: 2px;
        margin-top: -10px;
      }
      li {
        align-items: flex-end;
        display: flex;
        width: 100%;
        margin: 14px 0;
        background-color: #fff;
        padding: 0 6px;
        border-bottom: 0.6px solid rgb(226, 226, 226);
        img {
          display: block;
          width: 32%;
        }
        .inm {
          flex: 1;
          padding: 0 12px;
          p {
            font-size: 16px;
            color: rgb(87, 87, 87);
            line-height: 34px;
            span {
              font-size: 18px;
              color: #ff4646;
              font-weight: bold;
            }
          }
        }
        .btn {
          width: 80px;
          .sc {
            width: 60px;
            font-size: 13px;
            line-height: 24px;
            border: 1px solid rgb(158, 158, 158);
            color: rgb(158, 158, 158);
            text-align: center;
            border-radius: 12px;
            margin: 0 auto;
          }
          .ljgm {
            width: 100%;
            color: #ff4646;
            border: 1px solid #ff4646;
            line-height: 30px;
            border-radius: 4px;
            font-size: 13px;
            text-align: center;
            margin: 40px 0 8px 0;
          }
        }
      }
    }
  }
  position: relative;
  width: 100%;
  z-index: 999;
  background-color: #fff;
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
}
</style>