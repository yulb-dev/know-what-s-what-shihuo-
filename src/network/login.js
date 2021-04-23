import { login } from './index'

// 处理响应拦截
login.interceptors.response.use(res => {
    return res.data
})

export function islogin(name, password) {
    return login({ url: '/', data: { name, password } })
}
export function isregistered(name, password) {
    return login({ url: '/registered', data: { name, password } })
}