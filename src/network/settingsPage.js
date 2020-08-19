import axios from 'axios'

const getfile = axios.create({
    baseURL: 'http://127.0.0.1:6060/settingsPage',
    timeout: 1000,
    headers: { 'Content-Type': 'multipart/form-data' },
})

// 处理响应拦截
getfile.interceptors.response.use(res => {
    return res.data
})

export function getf(data) {
    return getfile({
        method: 'post',
        url: '/',
        data
    })
}
export function cname(id, name) {
    return axios.post('http://127.0.0.1:6060/settingsPage/cname', { id, name })
}