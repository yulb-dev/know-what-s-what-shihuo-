import { category } from './index'

// 处理响应拦截
category.interceptors.response.use(res => {
    return res.data
})

export function firstClass() {
    return category('/')
}
export function Secondary(menuName) {
    return category({ url: '/Secondary', params: { menuName } })
}

export function exit() {
    return category('/exit')
}