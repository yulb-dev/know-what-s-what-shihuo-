import axios from 'axios'

export function getGoods(name) {
    return axios.post('http://47.105.222.69:6060/catePage/getGoods', { name })
}

export function getitem(data) {
    return axios.post('http://47.105.222.69:6060/catePage', { data })
}