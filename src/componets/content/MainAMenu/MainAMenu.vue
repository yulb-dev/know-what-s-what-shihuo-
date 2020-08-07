<template>
  <div class="a-menu">
    <ul>
      <li
        v-for="(item, index) in classList"
        :key="index"
        @click="isSelect(item.name,index)"
        :class="{Activity:index == isActivity}"
      >
        <div>
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { firstClass } from "../../../network/category";
export default {
  data() {
    return {
      classList: null,
      isActivity: 0,
    };
  },
  methods: {
    isSelect(name, index) {
      this.isActivity = index;
      this.sendMessage(name);
    },
    sendMessage(value) {
      this.$emit("changeAMenu", value);
    },
  },
  // watch: {
  //   menuName(value) {
  //     this.sendMessage(value);
  //   },
  // },
  created() {
    firstClass().then((data) => {
      this.classList = data;
      this.sendMessage(data[0].name);
    });
  },
  // activated() {
  //   console.log("activi", this.menuName);
  //   this.sendMessage(this.menuName);
  // },
};
</script>
<style lang="less">
.Activity {
  border-left: 4px solid #333;
  color: rgb(68, 68, 68) !important;
}
.a-menu {
  width: 24%;
  height: 100%;
  border-right: 1.3px solid #e6e6e6;
  z-index: 999;
  ul {
    height: 100%;
    overflow: hidden;
    box-shadow: 1px 0px 13px -1px #d8d8d8;
    li {
      height: 10%;
      padding: 0 6px;
      color: rgb(136, 135, 135);
      div {
        height: 100%;
        border-bottom: 1px solid rgb(233, 233, 233);
        padding-top: 28%;
      }
      p {
        text-align: center;
        font-family: "黑体";
        font-size: 15px;
        letter-spacing: 1px;
        line-height: 1rem;
        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis;
      }
    }
  }
}
</style>