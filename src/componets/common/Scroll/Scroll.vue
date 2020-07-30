<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    hideShowBackTop: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.$refs.wrapper.style.height = window.screen.availHeight + "px";
    if (this.hideShowBackTop) {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true,
      });
      this.scroll.on("scroll", (position) => {
        if (position.y < -800) this.$emit("goTop", true);
        else this.$emit("goTop", false);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        this.scroll.finishPullUp();
      });
    } else {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
      });
      this.scroll.on("scroll", (position) => {
        if (position.y < -800) this.$emit("goTop", true);
        else this.$emit("goTop", false);
      });
    }
  },
};
</script>

<style lang="less">
.wrapper {
  overflow: hidden;
  width: 100%;
}
</style>
