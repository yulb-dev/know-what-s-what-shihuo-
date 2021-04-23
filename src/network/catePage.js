// import axios from 'axios'
import { catePage } from './index'

export function getGoods(name) {
    return catePage.post('/catePage/getGoods', { name })
}

export function getitem(data) {
    return catePage.post('/catePage', { data })
}