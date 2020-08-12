<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less">
.nav-bar {
  // padding: 0 6px;
  background-color: white;
  display: flex;
  // height: 44px;
  width: 100%;
  .left {
    flex: 1;
  }
  .right {
    text-align: center;
    width: 50px;
    // background-color: blue;
  }
}
</style>