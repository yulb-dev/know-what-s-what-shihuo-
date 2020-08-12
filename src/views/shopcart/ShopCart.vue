<template>
  <div class="sCart" ref="sCart">
    <top-bar>
      <div slot="center">
        <h3>购物车</h3>
      </div>
    </top-bar>
    <div class="content" v-if="$store.state.user">
      <ul>
        <li v-for="(item, index) in $store.state.user.shoppingCart" :key="index">
          <div class="check" @click="isSelected"></div>
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
          <div class="num">
            <div class="add" @click="addNum(item)">+</div>
            <span>{{item.num}}</span>
            <div class="add" @click="jNum(item)">-</div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="btn" @click="$router.push('/login')">登录</div>
  </div>
</template>
<script>
import { addSpCart2 } from "../../network/Detail";
import TopBar from "../../componets/common/topbar/TopBar";
export default {
  methods: {
    addNum(item) {
      addSpCart2(item._id, ++item.num);
    },
    jNum(item) {
      if (item.num > 1) addSpCart2(item._id, --item.num);
    },
    isSelected() {},
  },
  mounted() {
    this.$refs.sCart.style.height = window.screen.availHeight + "px";
  },
  components: {
    TopBar,
  },
};
</script>
<style lang="less">
.sCart {
  position: relative;
  overflow: auto;
  background-color: #f5f5f5;
  .top-bar {
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .top-bar-center {
    padding: 6px 0;
    letter-spacing: 1px;
    color: #ff4646;
  }
  .num {
    display: flex;
    span {
      font-size: 15px;
      font-weight: bold;
      margin: 0 4px;
      color: #ff4646;
    }
    .add {
      width: 17px;
      height: 17px;
      border-radius: 50%;
      font-size: 12px;
      text-align: center;
      color: rgb(134, 134, 134);
      border: 1px solid rgb(172, 172, 172);
    }
  }
  .btn {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #ff4646;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 40px;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .content {
    width: 100%;
    ul {
      width: 100%;
      padding: 41px 10px;
      li {
        align-items: center;
        display: flex;
        width: 100%;
        margin: 14px 0;
        border-radius: 14px;
        background-color: #fff;
        padding: 0 6px;
        .check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgb(170, 170, 170);
        }
        img {
          display: block;
          border-radius: 14px;
          width: 30%;
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
      }
    }
  }
}
</style>