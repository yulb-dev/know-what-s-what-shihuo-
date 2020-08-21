import axios from 'axios'

// //处理响应拦截
// axios.interceptors.response.use(res => {
//     return res.data
// })

export function buyNow(item) {
    return axios.post('http://47.105.222.69:6060/favorites/buyNow', { item })
}
export function getSa(name, id) {
    return axios.post('http://47.105.222.69:6060/favorites/getSa', { name, id })
}