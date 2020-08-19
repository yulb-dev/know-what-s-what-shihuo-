<template>
  <div class="sCart" ref="sCart">
    <top-bar>
      <div slot="left"></div>
      <div slot="center">
        <h3 v-if="$store.state.user">购物车({{$store.state.user.shoppingCart.length}})</h3>
        <h3 v-else>购物车</h3>
      </div>
      <div slot="right" :class="{sc:highLight}" @click="delGoods" v-if="$store.state.user">
        <p>删除</p>
      </div>
    </top-bar>
    <div class="content" v-if="$store.state.user">
      <ul>
        <li v-for="(item, index) in $store.state.user.shoppingCart" :key="index">
          <div :class="{check:true,bgc:checkList.includes(index)}" @click="isSelected(index)"></div>
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
            <div class="add" @click="addNum(item,index)">+</div>
            <span>{{item.num}}</span>
            <div class="add" @click="jNum(item,index)">-</div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="btn" @click="$router.push('/login')">登录</div>
    <div class="operat" v-if="$store.state.user&&$store.state.user.shoppingCart.length">
      <div :class="{check:true,bgc:isSelectAll}" @click="cSelectAll"></div>
      <p class="qx">全选</p>
      <p class="hj">合计:</p>
      <span>￥{{total}}</span>
      <div class="btn2" @click="settlement">
        <p>
          结算
          <span v-if="checkList.length">({{checkList.length}})</span>
        </p>
      </div>
    </div>
    <div v-else-if="$store.state.user" class="hint">快去逛逛吧~~~</div>
    <alert-box v-show="ab" :boxContent="boxContent" />
  </div>
</template>
<script>
import { box } from "../../common/mixin";
import { addSpCart2 } from "../../network/Detail";
import TopBar from "../../componets/common/topbar/TopBar";
export default {
  mixins: [box],
  data() {
    return {
      checkList: [],
      total: 0,
      isSelectAll: false,
      highLight: false,
    };
  },
  methods: {
    delGoods() {
      if (this.checkList.length) {
        this.$store.commit("delsCarts", this.checkList);
        this.checkList.splice(0, this.checkList.length);
        this.box("删除成功");
      } else {
        this.box("未选择商品");
      }
    },
    settlement() {
      if (this.checkList.length) {
        this.$store.commit("settlement", {
          iArr: this.checkList,
          total: this.total,
        });
        this.box("购买成功！");
      } else this.box("未选择商品");
    },
    addNum(item, index) {
      addSpCart2(item._id, ++item.num);
      if (this.checkList.includes(index)) {
        this.total += this.$store.state.user.shoppingCart[index].price;
      }
    },
    jNum(item, index) {
      if (item.num > 1) {
        addSpCart2(item._id, --item.num);
        if (this.checkList.includes(index)) {
          this.total -= this.$store.state.user.shoppingCart[index].price;
        }
      }
    },
    cSelectAll() {
      if (
        this.checkList.length === this.$store.state.user.shoppingCart.length
      ) {
        this.checkList.splice(0, this.checkList.length);
        this.isSelectAll = false;
      } else {
        for (let i = 0; i < this.$store.state.user.shoppingCart.length; i++) {
          if (!this.checkList.includes(i)) this.checkList.push(i);
        }
        this.isSelectAll = true;
      }
    },
    isSelected(index) {
      let i;
      if ((i = this.checkList.indexOf(index)) != -1) {
        this.checkList.splice(i, 1);
        this.isSelectAll = false;
      } else {
        this.checkList.push(index);
      }
    },
  },
  computed: {
    clist() {
      return (
        this.$store.state.user && this.$store.state.user.shoppingCart.length
      );
    },
  },
  watch: {
    clist(value) {
      this.checkList.splice(0, this.checkList.length);
    },
    checkList(value) {
      this.total = 0;
      for (let i = 0; i < this.checkList.length; i++) {
        this.total +=
          this.$store.state.user.shoppingCart[this.checkList[i]].price *
          this.$store.state.user.shoppingCart[this.checkList[i]].num;
      }
      if (this.checkList.length != 0) this.highLight = true;
      else this.highLight = false;
      if (
        this.$store.state.user &&
        this.checkList.length === this.$store.state.user.shoppingCart.length &&
        this.checkList.length != 0
      )
        this.isSelectAll = true;
      else this.isSelectAll = false;
    },
  },
  // mounted() {
  //   this.$refs.sCart.style.height = window.screen.availHeight + "px";
  // },
  components: {
    TopBar,
  },
};
</script>
<style lang="less">
.sCart {
  position: relative;
  overflow: auto;
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
  .hint {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgb(134, 134, 134);
    font-size: 18px;
  }
  .operat {
    padding: 0 10px;
    align-items: center;
    display: flex;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 48px;
    width: 100%;
    background-color: #fff;
    border-top: 0.6px solid rgb(209, 209, 209);
    .qx {
      color: rgb(75, 75, 75);
      flex: 1;
      padding-left: 8px;
      font-size: 16px;
    }
    .hj {
      font-size: 16px;
      color: #333;
    }
    span {
      display: block;
      font-size: 14px;
      color: #fc4d4d;
      padding: 2px 10px 0 2px;
    }
    .btn2 {
      width: 100px;
      // text-align: center;
      background-color: #fc4d4d;
      border-radius: 36px;
      p {
        text-align: center;
        font-size: 16px;
        letter-spacing: 2px;
        color: #fff;
        line-height: 36px;
      }
      span {
        font-size: 16px;
        padding: 0;
        color: #fff;
        display: inline-block;
      }
    }
  }
  .bgc {
    background-color: #fc4d4d;
  }
  .top-bar {
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .top-bar-left {
    width: 76px;
  }
  .top-bar-right {
    width: 76px;
    padding: 2px 10px;
    div {
      width: 100%;
      border: 0.6px solid rgb(139, 139, 139);
      color: rgb(139, 139, 139);
      border-radius: 26px;
    }
    .sc {
      color: #ff4646;
      border: 0.6px solid #ff4646;
    }
    p {
      width: 100%;
      text-align: center;
      line-height: 26px;
      font-size: 14px;
    }
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
  .check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid rgb(175, 175, 175);
    transition: 0.2s all;
  }
  .content {
    width: 100%;
    ul {
      width: 100%;
      padding: 42px 10px 100px 10px;
      li {
        align-items: center;
        display: flex;
        width: 100%;
        margin: 14px 0;
        border-radius: 14px;
        background-color: #fff;
        padding: 0 6px;

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