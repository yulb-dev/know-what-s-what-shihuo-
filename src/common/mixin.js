import BackTop from "../componets/common/BackTop/BackTop.vue";

export var backTop = {
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        goTop(isShow) {
            this.isShow = isShow;
        },
        backlick() {
            // 通过 @click.native 监听点击组件事件
            //可以通过 子 ->父 传值在 scroll生命周期函数中将 scroll 实例传递给父组件，
            //父组件创建对象保存，父组件再通过backlick调用scroll的scrollTo方法返回顶部
            this.$refs.scroll.scroll.scrollTo(0, 0, 500);
        },
    },
    components: {
        BackTop
    }
}