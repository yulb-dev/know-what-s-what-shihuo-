<template>
  <div class="rotation">
    <ul class="img">
      <li v-for="(item, index) in imglist" :key="index" @click="toItemDetails(item)">
        <img :src="item.img" />
      </li>
    </ul>
    <ul class="dots">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      swiperItem: null,
      timer2: null,
    };
  },
  props: {
    imglist: {
      type: Array,
    },
  },
  watch: {
    imglist(value) {
      this.$nextTick(() => {
        this.startCarousel();
      });
    },
  },
  methods: {
    toItemDetails(item) {
      this.swiperItem = item;
      // this.$emit("ctoItemDetails", item);
    },
    startCarousel() {
      var img_ul = document.getElementsByClassName("img")[0];
      var img_li = img_ul.getElementsByTagName("li");
      var dots_li = document
        .getElementsByClassName("dots")[0]
        .getElementsByTagName("li");
      var rotation = document.getElementsByClassName("rotation")[0];
      var index = 0;
      var w = img_li[0].offsetWidth;
      dots_li[index].style.backgroundColor = "white";
      var timer = null;
      this.timer2 = timer;
      function move() {
        timer = setInterval(function () {
          index++;
          img_ul.style.transition = "all 0.3s";
          img_ul.style.transform = "translateX(" + -index * w + "px)";
          for (var i = 0; i < dots_li.length; i++) {
            dots_li[i].style.backgroundColor = "";
          }
          if (index == 4) {
            dots_li[0].style.backgroundColor = "white";
          } else {
            dots_li[index].style.backgroundColor = "white";
          }
        }, 2500);
      }
      move();
      img_ul.addEventListener("transitionend", function () {
        if (index == 4) {
          index = 0;
          img_ul.style.transition = "none";
          img_ul.style.transform = "translateX(0)";
        }
        if (index < 0) {
          index = 3;
          img_ul.style.transition = "none";
          img_ul.style.transform = "translateX(" + -index * w + "px)";
        }
      });
      var x = 0;
      var x1 = 0;
      rotation.addEventListener("touchstart", function (e) {
        clearInterval(timer);
        x = e.targetTouches[0].pageX;
        x1 = 0;
      });
      rotation.addEventListener("touchmove", function (e1) {
        x1 = e1.targetTouches[0].pageX;
        img_ul.style.transition = "none";
        img_ul.style.transform =
          "translateX(" +
          (-index * w + (e1.targetTouches[0].pageX - x)) +
          "px)";
      });
      rotation.addEventListener("touchend", function () {
        if (x1 - x >= 30) {
          index--;
          img_ul.style.transition = "all 0.3s";
          for (var i = 0; i < dots_li.length; i++) {
            dots_li[i].style.backgroundColor = "";
          }
          if (index == 4) {
            dots_li[0].style.backgroundColor = "white";
          } else if (index == -1) {
            dots_li[3].style.backgroundColor = "white";
          } else {
            dots_li[index].style.backgroundColor = "white";
          }
          move();
          img_ul.style.transform = "translateX(" + -index * w + "px)";
        } else if (x1 - x <= -30) {
          index++;
          img_ul.style.transition = "all 0.3s";
          for (var i = 0; i < dots_li.length; i++) {
            dots_li[i].style.backgroundColor = "";
          }
          if (index == 4) {
            dots_li[0].style.backgroundColor = "white";
          } else {
            dots_li[index].style.backgroundColor = "white";
          }
          move();
          img_ul.style.transform = "translateX(" + -index * w + "px)";
        } else {
          move();
          img_ul.style.transition = "all 0.3s";
          img_ul.style.transform = "translateX(" + -index * w + "px)";
        }
      });
    },
  },
  deactivated() {
    console.log("ok");
  },
};
</script>
<style lang="less">
.rotation {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 46px;
  .img {
    width: 600%;
    display: flex;
    margin-left: -100%;
    transition: all 0.3s;
    li {
      width: 16.6666%;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .dots {
    position: absolute;
    z-index: 1;
    display: flex;
    width: 25%;
    bottom: 6px;
    left: 50%;
    justify-content: space-between;
    transform: translateX(-50%);
    li {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      border: 2px solid white;
    }
  }
}
</style>