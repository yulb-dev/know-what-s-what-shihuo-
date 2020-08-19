import axios from 'axios'

export function getGoods(name) {
    return axios.post('http://127.0.0.1:6060/catePage/getGoods', { name })
}

export function getitem(data) {
    return axios.post('http://127.0.0.1:6060/catePage', { data })
}