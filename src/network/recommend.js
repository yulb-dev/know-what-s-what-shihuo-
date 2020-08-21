import axios from 'axios'

const request = axios.create({
    baseURL: 'http://47.105.222.69:6060/recommend',
    timeout: 5000,
    withCredentials: true   //设置此项  会携带跨域cookie
});

// 处理响应拦截
request.interceptors.response.use(res => {
    return res.data
})

export function reqLogo(name) {
    return request({ url: '/logo', params: { name } })
}
export function reqGoods(name) {
    return request({ url: '/goods', params: { name } })
}