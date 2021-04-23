// import axios from 'axios'
import { search } from './index'

export function getGoods(text) {
    return search.get('/getGoods', { params: { text } })
}