<template>
  <div class="activity-box">
    <h4>热门活动</h4>
    <activity>
      <activity-item v-for="(item, index) in activityList" :key="index" :ahref='item.ahref'>
        <img :src="item.imgurl" slot="img" width="100%" height="70px" />
        <span slot="p1">{{item.p1}}</span>
        <span slot="p2">{{item.p2}}</span>
      </activity-item>
    </activity>
  </div>
</template>
<script>
import Activity from "../../common/activity/activity";
import ActivityItem from "../../common/activity/activityItem";
export default {
  data() {
    return {
      activityList: [],
      imgurl: "",
    };
  },
  components: {
    Activity,
    ActivityItem,
  },
  created() {
    var p1arr = [
      "skullcandy耳机",
      "热门资讯",
      "潮流折扣日Vlo.53",
      "独家折扣专享",
      "1000块包全身",
      "好物推荐",
    ];
    var p2arr = [
      "券后低至89元起",
      "最新最热门的数码咨询",
      "别再错过专属优惠了",
      "买到就是赚到",
      "不说虚话",
      "为您推荐潮酷好物",
    ];
    var aarr = [
      "http://www.shihuo.cn/app/assets/youhui/1.0.2/brandSale.html",
      "https://m.shihuo.cn/column/245.html",
      "http://www.shihuo.cn/article/detail/21332.html",
      "http://t.shihuo.cn/m/538.html",
      "http://www.shihuo.cn/article/detail/19901.html",
      "http://www.shihuo.cn/article/detail/20620.html",
    ];
    // var a = [];
    for (let i = 0; i < 6; i++) {
      this.activityList.push({
        imgurl: require("../../../assets/img/activity/" + (i + 1) + ".png"),
        p1: p1arr[i],
        p2: p2arr[i],
        ahref: aarr[i],
      });
    }
    // this.activityList = a;
  },
};
</script>
<style lang="less">
.activity-box {
  width: 100%;
  margin-top: 20px;
  padding-top: 4px;
  border-top: 1px solid rgb(247, 246, 246);
  box-shadow: 0px -3px 5px -7px rgb(117, 117, 117);
}
h4 {
  color: #444;
  line-height: 26px;
  padding-left: 5px;
}
</style>