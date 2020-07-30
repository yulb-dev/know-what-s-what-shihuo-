<template>
  <div
    id="tag-bar-item"
    @click="skip"
    :class="{co:isActive}"
    :style="{color:isActive?selectColor:'rgb(138, 138, 138)'} "
  >
    <slot name="icon"></slot>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    skip() {
      this.$router.replace(this.path);
    },
  },
  props: {
    path: String,
    selectColor: { type: String, default: "black" },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
  },
};
</script>
<style lang="less">
.co {
  i {
    color: rgb(255, 70, 70);
  }
}
#tag-bar-item {
  font-family: "华文黑体";
  text-align: center;
  height: 49px;
  flex: 1;
  transition: 0.3s all;
  p {
    font-size: 14px;
    letter-spacing: 2px;
    margin-top: -3px;
  }
  i {
    display: block;
    font-size: 30px;
  }
}
</style>