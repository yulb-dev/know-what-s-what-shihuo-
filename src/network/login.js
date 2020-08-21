import axios from 'axios'

const request = axios.create({
    baseURL: 'http://47.105.222.69:6060/login',
    // timeout: 1000,
    withCredentials: true   //设置携带cookie
});

// 处理响应拦截
request.interceptors.response.use(res => {
    return res.data
})

export function islogin(name, password) {
    return request({ url: '/', data: { name, password }, method: 'post' })
}
export function isregistered(name, password) {
    return request({ url: '/registered', data: { name, password }, method: 'post' })
}