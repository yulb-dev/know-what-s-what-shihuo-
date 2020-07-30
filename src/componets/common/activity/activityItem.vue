<template>
  <li class="activity-item">
    <a :href="ahref">
      <slot name="img"></slot>
      <p class="p1">
        <slot name="p1"></slot>
      </p>
      <p class="p2">
        <slot name="p2"></slot>
      </p>
    </a>
  </li>
</template>
<script>
export default {
  props: {
    ahref: {
      type: String,
    },
  },
};
</script>
<style lang="less">
.activity-item {
  a {
    display: block;
    text-decoration: none;
  }
  padding: 0 2px;
  width: 33%;
  overflow: hidden;
  padding-bottom: 16px;
  img {
    display: block;
    border-radius: 3px;
    margin-bottom: 6px;
  }
  .p1 {
    color: #444;
    line-height: 1rem;
    font-size: 13px;
    font-weight: bold;
    height: 16px;
    overflow: hidden;
  }
  .p2 {
    line-height: 1rem;
    color: #666;
    font-size: 10px;
    text-align: center;
    height: 16px;
    overflow: hidden;
  }
}
</style>