import axios from 'axios'

const request = axios.create({
    baseURL: 'http://127.0.0.1:6060/home',
    timeout: 1000,
});

// 处理响应拦截
request.interceptors.response.use(res => {
    return res.data
})

export function swiperreq() {
    return request('/swiper')
}
export function recommreq() {
    return request('/recommend')
}

//req为配置对象，分别配置params：{  class: "新款",page: this.goods.popular.page,}
export function getPopularList(req) {
    return request(req)
}
