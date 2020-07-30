<template>
  <div class="box1">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.box1 {
  border-radius: 3px;
  border: 1px solid rgb(247, 246, 246);
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 14px;
  box-shadow: 0px -3px 7px -7px #757575;
}
</style>