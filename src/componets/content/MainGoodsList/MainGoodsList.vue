<template>
  <goods-list>
    <goods-list-item v-for="(item, index) in goodsList" :key="index">
      <div class="goods">
        <div class="goodsImig">
          <img :src="item.img" />
        </div>
        <div class="goodsText">
          <span class="sales">
            月销量{{item.sales}}
            <br />
            &#9829;{{item.favorites}}
          </span>
          <h2>{{item.name}}</h2>
          <p class="description">
            <img src="../../../assets/img/icon/quote_left.png" />
            {{ item.description}}
            <img src="../../../assets/img/icon/quote_right.png" />
          </p>
          <p class="price">¥{{item.price}}</p>
        </div>
      </div>
    </goods-list-item>
  </goods-list>
</template>
<script>
import GoodsList from "../../common/goodslist/goodslist";
import GoodsListItem from "../../common/goodslist/goodslistItem";
export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsList,
    GoodsListItem,
  },
};
</script>
<style lang="less">
.goods {
  display: flex;
  height: 136px;
  padding: 16px 0;
  .goodsImig {
    width: 30%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .goodsText {
    padding: 0 4px 0 12px;
    flex: 1;
    height: 100%;
    .sales {
      font-size: 11px;
      line-height: 0.9rem;
      text-align: right;
      float: right;
      color: rgb(151, 150, 150);
      letter-spacing: 1px;
    }
    h2 {
      color: #333;
      font-size: 14px;
    }
    .description {
      color: #666;
      font-size: 13px;
      padding: 30px 0;
      img {
        width: 0.6rem;
        display: inline-block;
      }
    }
    .price {
      font-size: 14px;
      color: #ff4338;
    }
  }
}
</style>