<template>
  <div class="cbox" @click.self="$emit('sdcbox')">
    <div class="pl">
      <input type="text" placeholder="请输入评论" v-model="content" v-focus />
      <button @click="tj">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    tj() {
      this.content = this.content.replace(/\s+/g, "");
      if (this.content != "") {
        this.$emit("sdcbox", this.content);
      }
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus(); //inserted 表示元素插入到DOM中的时候，会执行 inserted 函数【触发一次】
      },
    },
  },
};
</script>
<style lang="less" scope>
.cbox {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(197, 197, 197, 0.541);
  left: 0;
  top: 0;
  .pl {
    position: absolute;
    width: 90%;
    padding: 20px;
    // box-shadow: 0 0 12px 0px #cacaca;
    background-color: #fff;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    text-align: right;
    button {
      display: inline-block;
      padding: 0 20px;
      background: none;
      outline: none;
      border: none;
      background-color: crimson;
      color: #fff;
      font-size: 15px;
      letter-spacing: 1px;
      line-height: 30px;
      border-radius: 4px;
      margin-top: 16px;
      text-align: right;
    }
  }
  input {
    box-shadow: 0 0 12px 0px #cacaca;
    border-radius: 5px;
    background: none;
    outline: none;
    border: none;
    height: 36px;
    width: 100%;
    padding-left: 10px;
    color: rgb(105, 105, 105);
    caret-color: rgb(90, 90, 90);
    font-size: 14px;
    line-height: 36px;
    letter-spacing: 1px;
    -webkit-appearance: none;
  }
}
</style>