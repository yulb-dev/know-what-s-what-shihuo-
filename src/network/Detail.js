import axios from 'axios'

//处理响应拦截
axios.interceptors.response.use(res => {
    return res.data
})

export function getGoodsDetail(id) {
    return axios.get('http://127.0.0.1:6060/goodsDetail', { params: { id } })
}

export function getRecommendList(idArr) {
    return axios.post('http://127.0.0.1:6060/goodsDetail/recommend', { idArr })
}
//添加收藏
export function addFavorites(id, data, goodsId, num) {
    return axios.post('http://127.0.0.1:6060/goodsDetail/addFavorites', { id, data, goodsId, num })
}
//取消收藏
export function unFavorite(id, data, goodsId, num) {
    return axios.post('http://127.0.0.1:6060/goodsDetail/unFavorite', { id, data, goodsId, num })
}
//添加购物车
export function addSpCart(data) {
    return axios.post('http://127.0.0.1:6060/goodsDetail/addSpCart', { data })
}
//重复添加购物车  增加num
export function addSpCart2(id, num) {
    return axios.post('http://127.0.0.1:6060/goodsDetail/addSpCart2', { id, num })
}

export class Goods {
    constructor(item) {
        this.id = item._id
        this.name = item.name
        this.price = item.price
        this.sales = item.sales
        this.favorites = item.favorites
        this.discount = item.discount
        this.coloList = item.parameter[1].value
        this.sizeList = item.parameter[0].value
        this.attributes = item.attributes
    }
}