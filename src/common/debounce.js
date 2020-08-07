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

