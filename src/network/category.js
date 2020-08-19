import axios from 'axios'

const request = axios.create({
    baseURL: 'http://127.0.0.1:6060/category',
    timeout: 1000,
    withCredentials: true   //设置此项  会携带跨域cookie
});

// 处理响应拦截
request.interceptors.response.use(res => {
    return res.data
})

export function firstClass() {
    return request('/')
}
export function Secondary(menuName) {
    return request({ url: '/Secondary', params: { menuName } })
}

export function exit() {
    return request('/exit')
}