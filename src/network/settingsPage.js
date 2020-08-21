import axios from 'axios'

const getfile = axios.create({
    baseURL: 'http://47.105.222.69:6060/settingsPage',
    // timeout: 1000,
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
    return axios.post('http://47.105.222.69:6060/settingsPage/cname', { id, name })
}