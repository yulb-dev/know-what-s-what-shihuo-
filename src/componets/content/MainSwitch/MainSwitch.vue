<template>
  <div class="switch">
    <div
      v-for="(item, index) in ['篮球','新款','精选']"
      :key="index"
      @click="select(index)"
      :ref="'div'+index"
    >
      <p :class="{isSelect:index == Select}" :ref="'p'+index">{{item}}</p>
    </div>
    <span class="tiao" ref="tiao"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Select: 0,
      left: 0,
      width: 0,
    };
  },
  methods: {
    select(index) {
      this.Select = index;
      this.$refs.tiao.style.transform =
        "translateX(" + (index * this.width + this.left) + "px)";

      // 将选择的结果传递给父组件 home
      if (index == 0) var sle = "popular";
      else if (index == 1) var sle = "new";
      else var sle = "featured";
      this.$emit("cswitch", sle);
    },
  },
  mounted() {
    var pwidth = this.$refs.p1[0].offsetWidth;
    this.width = this.$refs["div0"][0].offsetWidth;
    this.left = (this.width - pwidth) / 2;
    this.$refs.tiao.style.width = pwidth + "px";
    this.$refs.tiao.style.transform =
      "translateX(" + (0 * this.width + this.left) + "px)";
  },
};
</script>
<style lang="less">
.switch {
  position: relative;
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid rgb(247, 246, 246);
  box-shadow: 0px -3px 5px -7px rgb(117, 117, 117);
  width: 100%;
  display: flex;
  // border-bottom: 1px solid rgb(247, 246, 246);
  .tiao {
    display: block;
    // width: 33%;
    height: 2px;
    background-color: #ff4338;
    position: absolute;
    bottom: 0;
    transition: 0.2s all;
  }
  div {
    flex: 1;
    height: 32px;
    position: relative;
    color: #333;
  }
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    transition: 0.2s all;
  }
}
.isSelect {
  color: #ff4338;
  //   border-bottom: 2px solid #ff4338;
}
</style>