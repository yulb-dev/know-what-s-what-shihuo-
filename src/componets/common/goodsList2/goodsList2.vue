<template>
  <ul class="goodslist2">
    <slot></slot>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="less">
.goodslist2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //   padding-bottom: 49px;
}
</style>