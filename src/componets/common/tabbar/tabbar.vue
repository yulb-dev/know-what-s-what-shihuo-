<template>
  <div id="tag-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#tag-bar {
  display: flex;
  width: 100%;
  background-color: white;
  box-shadow: 0px 16px 6px 13px #757575;
}
</style>