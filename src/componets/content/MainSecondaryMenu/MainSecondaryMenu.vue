<template>
  <div class="secondary-menu" v-if="smenu">
    <div class="three-level-menu" v-for="(item, index) in smenu" :key="index">
      <div class="sname">
        <p>{{item.name}}</p>
      </div>
      <div class="sbox">
        <div class="three-level-item" v-for="(item1, index) in item.children" :key="index+''">
          <img :src="item1.img" />
          <p>{{item1.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Secondary } from "../../../network/category";
export default {
  data() {
    return {
      smenu: null,
      Aname: "",
    };
  },
  created() {},
  watch: {
    menuName(value) {
      var obj = { name: "热门品牌", path: ["热门品牌"], grade: 2 };
      this.Aname = value;
      Secondary(value).then((data) => {
        this.smenu = data;
      });
    },
  },
  props: {
    menuName: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less">
.secondary-menu {
  height: 100%;
  overflow: auto;
  flex: 1;
  background-color: #fff;
  padding: 14px 26px;
  .three-level-menu {
    width: 100%;
    .sname {
      font-size: 15px;
      line-height: 15px;
      color: rgb(100, 100, 100);
      width: 76%;
      margin: 14px auto;
      position: relative;
      border-bottom: 0.6px solid rgb(224, 224, 224);
      p {
        padding: 0 6px;
        position: absolute;
        background-color: #fff;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .sbox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .three-level-item {
        width: 28%;
        margin-bottom: 16px;
        img {
          width: 100%;
          // height: 66px;
          display: block;
          margin-bottom: 6px;
        }
        p {
          text-align: center;
          color: #333;
          font-size: 12px;
          line-height: 1rem;
          text-align: center;
          word-break: keep-all; /* 不换行 */
          white-space: nowrap; /* 不换行 */
          overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>