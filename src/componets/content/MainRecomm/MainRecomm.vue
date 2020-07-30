<template>
  <recommend>
    <div
      class="box2"
      v-for="(item, index) in recoImgList"
      :key="index"
      :class="{border1:index%2==0,border2:!(index%2==0)}"
    >
      <div>
        <h2>{{item.name}}</h2>
        <p>{{item.say}}</p>
      </div>
      <img :src="item.img" width="35%" height="100%" />
    </div>
  </recommend>
</template>
<script>
import Recommend from "../../common/recommend/recommend";
export default {
  props: {
    recoImgList: {
      type: Array,
    },
  },
  components: {
    Recommend,
  },
};
</script>
<style lang="less">
.box2 {
  width: 50%;
  display: flex;
  height: 64px;
  padding: 0 8px;
  div {
    flex: 1;
    h2 {
      font-size: 16px;
      padding-top: 14px;
      color: rgb(36, 36, 36);
    }
    p {
      font-size: 13px;
      padding-top: 4px;
      color: rgb(102, 102, 102);
    }
  }
}
img {
  display: block;
}
.border1 {
  border-right: 0.5px solid rgb(230, 229, 229);
  border-bottom: 0.5px solid rgb(230, 229, 229);
}
.border2 {
  border-bottom: 0.5px solid rgb(230, 229, 229);
}
</style>