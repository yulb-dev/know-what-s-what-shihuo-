import axios from 'axios'

export function getGoods(text) {
    return axios.get('http://127.0.0.1:6060/search/getGoods', { params: { text } })
}