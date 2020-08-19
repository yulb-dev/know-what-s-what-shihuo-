<template>
  <div class="goodsDetail" v-if="goods">
    <div class="goods-name">
      <span class="i">￥</span>
      <span class="price">{{goods.price}}</span>
      <span class="discount">{{goods.discount}}</span>
      <span class="sales">
        月销{{goods.sales}}
        <br />
        收藏{{goods.favorites}}
      </span>
      <p class="name">{{goods.name}}</p>
    </div>
    <div class="goods-color">
      <span class="title">选择配色</span>
      <ul>
        <li
          v-for="(item, index) in goods.coloList"
          :key="index"
          :class="{isActivity:index == isSelect,noActivity:index !== isSelect}"
          @click="change(index)"
        >
          <img :src="item.img[0]" />
          <p class="name">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="goods-size">
      <span class="title">选择尺码</span>
      <span
        v-for="(item, index) in goods.sizeList"
        :key="index"
        :class="{sizeActivity:index == sizeActivity,sizeNoActivity:index != sizeActivity}"
        @click="sizeChange(index)"
      >{{item}}</span>
    </div>
    <div class="advertising">
      <a href="http://m.shihuo.cn/app/html/template/baozhang/page/index.html">
        <img src="../../../assets/img/bcgg/bcgg.png" />
      </a>
      <ul>
        <li v-for="(item, index) in goods.attributes" :key="index">
          <p>
            {{item.name}}
            <span>{{item.value}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelect: 0,
      sizeActivity: 0,
    };
  },
  methods: {
    change(index) {
      this.isSelect = index;
      this.judge();
      this.$emit("imgListChange", index);
    },
    sizeChange(index) {
      this.sizeActivity = index;
      this.judge();
    },
    judge() {
      if (this.$store.state.user) {
        var i = 0;
        this.$store.state.user.Favorites.forEach((item) => {
          if (
            item.goodsid == this.goods.id &&
            item.color == this.goods.coloList[this.isSelect].name &&
            item.size == this.goods.sizeList[this.sizeActivity]
          )
            i++;
        });
        if (i) this.$emit("isFavorite", true);
        else this.$emit("isFavorite", false);
      }
    },
  },
  created() {
    this.judge();
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less">
.advertising {
  padding-top: 14px;
  padding-bottom: 16px;
  border-bottom: 0.6px solid rgb(245, 244, 244);
  width: 100%;
  a {
    display: block;
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
  }
  ul {
    li {
      line-height: 28px;
      font-size: 14px;
      p {
        color: rgb(156, 156, 156);
        padding: 0 2px;
      }
      span {
        float: right;
        color: rgb(75, 75, 75);
      }
    }
  }
}
.isActivity {
  border: 0.6px solid #f1afac;
  font-weight: bold;
}
.noActivity {
  border: 0.6px solid rgb(245, 244, 244);
}
.goods-size {
  .sizeNoActivity {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  .sizeActivity {
    font-size: 16px;
    font-weight: bold;
    color: #ff4338;
    flex: 1;
  }
  padding-top: 10px;
  display: flex;
  span {
    display: inline-block;
    line-height: 45px;
  }
  .title {
    width: 28%;
    font-size: 14px;
    color: rgb(97, 97, 97);
    letter-spacing: 1px;
  }
  border-bottom: 0.6px solid rgb(245, 244, 244);
}
.goods-color {
  padding-top: 8px;
  padding-left: 4px;
  .title {
    font-size: 14px;
    color: rgb(97, 97, 97);
    letter-spacing: 1px;
  }
  ul {
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    li {
      transition: 0.2s all;
      padding: 6px 6px 3px 6px;
      width: 26%;
      img {
        display: block;
        width: 100%;
      }
      p {
        font-size: 13px;
        color: #333;
        text-align: center;
        line-height: 22px;
        height: 22px;
        overflow: hidden;
      }
    }
  }
}
.goodsDetail {
  padding: 6px 10px 0 10px;
}
.goods-name {
  .name {
    color: #333;
    line-height: 32px;
    font-size: 16px;
    padding-left: 4px;
  }
  .price {
    color: #ff4338;
    font-weight: bold;
    font-size: 30px;
  }
  .i {
    color: #ff4338;
    font-size: 20px;
  }
  .discount {
    display: inline-block;
    padding: 0px 3px;
    line-height: 16px;
    background-color: #ffeaea;
    font-size: 12px;
    font-weight: bold;
    color: #ff4338;
    margin-left: 10px;
  }
  .sales {
    text-align: right;
    padding-top: 10px;
    font-size: 12px;
    color: rgb(172, 172, 172);
    float: right;
    letter-spacing: 1px;
    line-height: 1rem;
  }
}
</style>