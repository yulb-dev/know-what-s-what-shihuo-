<template>
  <div class="bottom-bar">
    <div class="sc">
      <i class="iconfont icon-shoucang"></i>
      <span>&nbsp;收藏</span>
    </div>
    <div class="gwc">
      <i class="iconfont icon-icon4"></i>
      <span>&nbsp;购物车</span>
    </div>
    <div class="ljgm">
      <span>立即购买</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.bottom-bar {
  display: flex;
  height: 54px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  padding: 7px 7px;
  box-shadow: 0px 13px 20px 15px #d8d8d8;
  .sc,
  .gwc {
    i {
      font-size: 20px;
    }
    text-align: center;
    width: 22%;
    height: 100%;
    font-size: 14px;
    color: #333;
    line-height: 40px;
    border: 0.6px solid rgb(214, 214, 214);
    border-radius: 2px;
  }
  .ljgm {
    text-align: center;
    width: 53%;
    height: 100%;
    font-size: 13px;
    background-color: #ff4338;
    color: #fff;
    font-weight: bold;
    line-height: 40px;
    border-radius: 1px;
  }
}
</style>