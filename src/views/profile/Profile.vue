<template>
  <div class="profile" ref="profile">
    <div class="profile-content">
      <div class="avatar" @click="goLogin">
        <img
          :src="$store.state.user?$store.state.user.avatar:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png'"
        />
        <p>{{$store.state.user?$store.state.user.name:'登录/注册'}}</p>
        <span class="iconfont icon-shezhi" @click="goSettings" v-if="$store.state.user"></span>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="first-row" @click="goFavorites">
            <p>收藏夹</p>
            <span>{{$store.state.user?$store.state.user.Favorites.length+'件':'未登录'}}</span>
          </div>
          <div class="xian"></div>
          <div class="first-row">
            <p>浏览历史</p>
            <span>{{$store.state.user?'124条记录':'未登录'}}</span>
          </div>
          <div class="xian2"></div>
          <div class="second-row" @click="goOrder">
            <p>订单</p>
          </div>
          <div class="xian"></div>
          <div class="second-row">
            <p>优惠券</p>
          </div>
          <div class="xian"></div>
          <div class="second-row">
            <p>补贴</p>
          </div>
        </div>
      </div>
      <div class="activity">
        <img src="../../assets/img/bcgg/card1.png" />
        <img src="../../assets/img/bcgg/card2.png" />
        <div class="exit" @click="exit" v-if="$store.state.user">退出</div>
      </div>
    </div>
  </div>
</template>
<script>
import { exit } from "../../network/category";
export default {
  methods: {
    exit() {
      exit().then((data) => {
        this.$store.state.user = null;
      });
    },
    goSettings() {
      //进入设置页
      this.$router.push("/settings");
    },
    goOrder() {
      //进入订单页面
      if (!this.$store.state.user) this.$router.push("/login");
      else {
        this.$router.push("/order");
      }
    },
    goFavorites() {
      //进入收藏夹
      if (!this.$store.state.user) this.$router.push("/login");
      else {
        this.$router.push("/favorites");
      }
    },
    goLogin() {
      if (!this.$store.state.user) this.$router.push("/login");
    },
  },
};
</script>
<style lang="less">
.profile {
  width: 100%;
  height: 100%;
  background-color: rgb(247, 247, 247);
  overflow: auto;
  .profile-content {
    width: 100%;
    .activity {
      padding-bottom: 49px;
      img {
        display: block;
        width: 100%;
        margin-bottom: 8px;
      }
      .exit {
        width: 80%;
        line-height: 36px;
        border-radius: 6px;
        letter-spacing: 2px;
        font-weight: bold;
        color: #fff;
        font-size: 18px;
        text-align: center;
        background-color: crimson;
        margin: 10px auto;
      }
    }
    .card {
      padding: 10px 10px;
      width: 100%;
      .card-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 1px 13px 0px #c5c5c5;
        border-radius: 3px;
        align-items: center;
        .xian {
          width: 1px;
          height: 26px;
          border-right: 1px solid rgb(230, 229, 229);
        }
        .xian2 {
          width: 100%;
          height: 1px;
          border-bottom: 1px solid rgb(241, 241, 241);
        }
        .first-row {
          width: 49%;
          padding: 14px 12px;
          p {
            font-size: 16px;
            line-height: 30px;
            font-weight: bold;
            color: #333;
          }
          span {
            font-size: 14px;
            color: rgb(194, 194, 194);
          }
        }
        .second-row {
          width: 33%;
          padding: 20px 0;
          p {
            font-weight: bold;
            font-size: 14px;
            color: #333;
            line-height: 1rem;
            text-align: center;
          }
        }
      }
    }
    .avatar {
      width: 100%;
      padding: 40px 10px 16px 10px;
      display: flex;
      span {
        display: block;
        font-size: 28px;
        color: rgb(139, 139, 139);
        padding-right: 16px;
        line-height: 56px;
      }
      img {
        display: block;
        border-radius: 50%;
        height: 56px;
        width: 56px;
      }
      p {
        flex: 1;
        padding-left: 10px;
        color: #333;
        font-size: 20px;
        font-weight: bold;
        line-height: 56px;
      }
    }
  }
}
</style>