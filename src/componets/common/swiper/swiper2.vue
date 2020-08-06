<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in imglist"
        :key="index"
        @click="toItemDetails(item)"
      >
        <img :src="item.img || item" width="100%" @load="change" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      mySwiper: null,
      //   swiperItem: null,
      num: 0,
    };
  },
  props: {
    imglist: {
      type: Array,
    },
  },
  methods: {
    toItemDetails(item) {
      //   this.swiperItem = item;
      this.$emit("ctoItemDetails", item);
    },
    change() {
      this.num++;
      if (this.num === this.imglist.length) {
        this.mySwiper = new Swiper(this.$refs.swiper, {
          loop: true, // 循环模式选项
          autoplay: {
            //可选选项，自动滑动
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          // autoplay: true,
          waitForTransition: false,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      }
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.swiper-container {
  width: 100%;
  --swiper-pagination-color: #fff;
  .swiper-wrapper {
    width: 100%;
  }
}

.swiper-pagination {
  bottom: 4px;
}
</style>