import axios from 'axios'

export function getGoods(text) {
    return axios.get('http://47.105.222.69:6060/search/getGoods', { params: { text } })
}