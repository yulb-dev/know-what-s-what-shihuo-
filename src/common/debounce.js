export default function ($bus, scroll) {
    let obj = null;
    return $bus.$on("finishSig", () => {
        //监听子组件发送的图片更新完成信号 ，并且更新scroll
        // 防抖操作 debounce
        if (obj) clearTimeout(obj);
        obj = setTimeout(() => {
            scroll.refresh()
        }, 50);
    });
}
[
    { name: '潮流热门', grade: 2 ,path:['为您推荐']},
    { name: 'Air Jordan', grade: 3 ,path:['潮流热门'],img:'http://shihuo.hupucdn.com/kupload2018/202061/15910070560000.?imageView2/1/w/400/h/400/interlace/1'},
    {name:'Air Force 1',grade:3,path:['潮流热门'],img:'http://shihuo.hupucdn.com/trade/reposition/2020-06-19/d8a01270a118e6be53f074b14b192ef3.png?imageView2/1/w/400/h/400/interlace/1'},
    {name:'Converse 1970s',grade:3,path:['潮流热门'],img:'http://shihuo.hupucdn.com/def/20200509/c70eafd1ad3723871dbc66bd88a84e021589010297.jpg?imageView2/1/w/400/h/400/interlace/1'},
    {name:'Nike Kyrie 6',grade:3,path:['潮流热门'],img:'http://shihuo.hupucdn.com/def/20191028/bfb8c375e06ac175b91b004655fe73221572249491.jpg?imageView2/1/w/400/h/400/interlace/1'},
    {name:'Air Jordan 34',grade:3,path:['潮流热门'],img:'http://shihuo.hupucdn.com/def/20190909/f71b828a31c230bd3957762ae97178301568024456.jpg?imageView2/1/w/400/h/400/interlace/1'},
    {name:'安踏 KT5',grade:3,path:['潮流热门'],img:'http://shihuo.hupucdn.com/def/20190907/a2ead4bca3c06639a8e7d5e68fbd31c21567820841.jpg?imageView2/1/w/400/h/400/interlace/1'},
    { name: 'Nike', grade: 2 ,path:['为您推荐']},
]
