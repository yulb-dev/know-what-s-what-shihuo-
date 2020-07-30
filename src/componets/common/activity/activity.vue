<template>
  <div class="activity">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.activity {
  margin-top: 10px;
  width: 100%;
  ul {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
  }
}
</style>