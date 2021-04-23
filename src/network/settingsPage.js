import { settingsPage } from './index'

// 处理响应拦截
settingsPage.interceptors.response.use(res => {
    return res.data
})

export function getf(data) {
    return settingsPage({
        url: '/',
        data
    })
}
export function cname(id, name) {
    return settingsPage({ url: '/cname', data: { id, name } })
}