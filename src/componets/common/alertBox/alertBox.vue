<template>
  <transition>
    <div class="alert-box">
      <p>{{boxContent}}</p>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    boxContent: {
      type: String,
      defaule: "",
    },
  },
};
</script>
<style lang="less" scope>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.alert-box {
  background-color: rgb(150, 150, 150);
  width: 100px;
  position: fixed;
  z-index: 999;
  left: 50%;
  bottom: 120px;
  transform: translateX(-50%);
  p {
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    letter-spacing: 1px;
  }
}
</style>