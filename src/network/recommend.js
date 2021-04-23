import { recommend } from './index'

// 处理响应拦截
recommend.interceptors.response.use(res => {
    return res.data
})

export function reqLogo(name) {
    return recommend({ url: '/logo', params: { name } })
}
export function reqGoods(name) {
    return recommend({ url: '/goods', params: { name } })
}