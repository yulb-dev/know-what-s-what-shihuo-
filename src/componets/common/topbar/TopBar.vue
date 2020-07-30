<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="top-bar-center">
      <slot name="center"></slot>
    </div>
    <div class="top-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.top-bar {
  background-color: #f7f7f7;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}
</style>
