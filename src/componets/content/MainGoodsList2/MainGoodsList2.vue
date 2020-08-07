<template>
  <goods-list2>
    <goods-list-item2
      v-for="(item, index) in goodsList"
      :key="index"
      @click.native="goDetail(item._id)"
    >
      <div class="goodsList2">
        <img :src="item.img" width="100%" @load="$emit('imgUp')" />
      </div>
      <p class="goodsname">{{item.name}}</p>
      <p class="goodsprice">
        <span>￥</span>
        {{item.price}}
        <span class="original-price">￥{{item.oldprice}}</span>
      </p>
      <div class="btns">
        <a href="#">立即抢购</a>
      </div>
    </goods-list-item2>
  </goods-list2>
</template>
<script>
import GoodsList2 from "../../common/goodsList2/goodsList2";
import GoodsListItem2 from "../../common/goodsList2/goodsList2Item";
export default {
  methods: {
    goDetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsList2,
    GoodsListItem2,
  },
};
</script>
<style lang="less">
.btns {
  height: 30px;
  padding: 10px 0 0 6px;
  a {
    float: left;
    padding: 0 8px;
    border-radius: 2px;
    font-size: 12px;
    color: #fff;
    line-height: 26px;
    text-decoration: none;
    background-color: #333333;
  }
  width: 100%;
}
.goodsname {
  padding-top: 8px;
  font-size: 17px;
  color: #333333;
  font-weight: bold;
  width: 100%;
  padding-left: 6px;
}
.goodsprice {
  padding-top: 8px;
  span {
    font-weight: normal;
    font-size: 14px;
  }
  .original-price {
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
  }
  padding-left: 6px;
  font-weight: bold;
  font-size: 20px;
  color: #dd1712;
}
</style>