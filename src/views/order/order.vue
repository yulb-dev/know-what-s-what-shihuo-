<template>
  <div class="order">
    <top-bar>
      <div slot="left" @click="$router.go(-1)">
        <img src="../../assets/img/icon/head_back.png" width="43px" />
      </div>
      <div slot="center">我的订单</div>
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
        <li v-for="(item, index) in $store.state.user.Order" :key="index">
          <p class="jycg">交易成功</p>
          <div class="item" v-for="(item1, index) in item.olist" :key="index">
            <img :src="item1.img" />
            <div class="right">
              <span v-if="item1.num">
                ￥{{item1.price}}
                <br />
                &times;{{item1.num}}
              </span>
              <span v-else>
                ￥{{item1.price}}
                <br />
                &times;{{item1.num}}
              </span>
              <p>{{item1.name}}</p>
              <p class="hui">{{item1.color}};{{item1.size}}</p>
            </div>
          </div>
          <p class="tprice">实付款￥{{item.tprice}}</p>
          <div class="btn" @click="delOrders(item._id)">删除订单</div>
        </li>
      </ul>
    </div>
    <alert-box v-show="ab" :boxContent="boxContent" />
  </div>
</template>
<script>
import { box } from "../../common/mixin";
import TopBar from "../../componets/common/topbar/TopBar";
export default {
  name: "order",
  mixins: [box],
  data() {
    return {
      isBox: false,
    };
  },
  methods: {
    delOrders(id) {
      this.$store.commit("delOrders", id);
      this.box("已删除");
    },
    sBox() {
      this.isBox = !this.isBox;
    },
  },
  components: {
    TopBar,
  },
};
</script>
<style lang="less">
.order {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  .content {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    overflow: auto;
    ul {
      padding: 50px 10px;
      li {
        background-color: #fff;
        padding: 10px 10px 40px 10px;
        border-radius: 6px;
        margin: 16px 0;
        .jycg {
          text-align: right;
          color: #ff4646;
          line-height: 30px;
          font-size: 14px;
        }
        .tprice {
          text-align: right;
          font-size: 16px;
          color: #333;
          line-height: 24px;
        }
        .item {
          display: flex;
          width: 100%;
        }
        img {
          display: block;
          width: 30%;
          margin-right: 10px;
        }
        .btn {
          font-size: 14px;
          color: rgb(97, 96, 96);
          line-height: 27px;
          padding: 0 12px;
          border-radius: 13px;
          border: 0.6px solid rgb(133, 133, 133);
          float: right;
          margin-top: 6px;
        }
        .right {
          flex: 1;
          span {
            float: right;
            line-height: 20px;
            margin-top: 6px;
            font-size: 14px;
            color: rgb(116, 116, 116);
            text-align: right;
          }
          .hui {
            color: rgb(150, 150, 150);
            font-size: 14px;
          }
          .tright {
            text-align: right;
          }
          p {
            font-size: 16px;
            color: #333;
            line-height: 26px;
          }
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