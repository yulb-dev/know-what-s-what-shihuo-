<template>
  <div class="profile" ref="profile">
    <div v-if="$store.state.user" class="profile-content">
      <div class="avatar">
        <img :src="$store.state.user.avatar" />
        <p>{{$store.state.user.name}}</p>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="first-row">
            <p>收藏夹</p>
            <span>{{$store.state.user.Favorites.length}}件</span>
          </div>
          <div class="xian"></div>
          <div class="first-row">
            <p>浏览历史</p>
            <span>共129条记录</span>
          </div>
          <div class="xian2"></div>
          <div class="second-row">
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
      </div>
    </div>
    <div v-else class="profile-content">
      <div class="avatar">
        <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" />
        <p @click="goLogin">登录/注册</p>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="first-row">
            <p>收藏夹</p>
            <span>暂无记录</span>
          </div>
          <div class="xian"></div>
          <div class="first-row">
            <p>浏览历史</p>
            <span>暂无记录</span>
          </div>
          <div class="xian2"></div>
          <div class="second-row">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // console.log(this.$store.state);
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$refs.profile.style.height = window.screen.availHeight + "px";
  },
};
</script>
<style lang="less">
.profile {
  width: 100%;
  background-color: rgb(247, 247, 247);
  overflow: auto;
  .profile-content {
    width: 100%;
    .activity {
      img {
        display: block;
        width: 100%;
        margin-bottom: 8px;
      }
      padding-bottom: 49px;
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