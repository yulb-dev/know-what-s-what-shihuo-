import { homereq } from './index'

// 处理响应拦截
homereq.interceptors.response.use(res => {
    return res.data
})

export function swiperreq() {
    return homereq('/swiper')
}
export function recommreq() {
    return homereq('/recommend')
}

//req为配置对象，分别配置params：{  class: "新款",page: this.goods.popular.page,}
export function getPopularList(req) {
    return homereq(req)
}
