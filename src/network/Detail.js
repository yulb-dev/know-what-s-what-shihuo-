import { detail } from './index'

//处理响应拦截
detail.interceptors.response.use(res => {
    return res.data
})

export function getGoodsDetail(id) {
    return detail.get('/goodsDetail', { params: { id } })
}

export function getRecommendList(idArr) {
    return detail.post('/goodsDetail/recommend', { idArr })
}
//添加收藏
export function addFavorites(id, data, goodsId) {
    return detail.post('/goodsDetail/addFavorites', { id, data, goodsId })
}
//取消收藏
export function unFavorite(id, data, goodsId) {
    return detail.post('/goodsDetail/unFavorite', { id, data, goodsId })
}
//添加购物车
export function addSpCart(data) {
    return detail.post('/goodsDetail/addSpCart', { data })
}
//重复添加购物车 或 增加num
export function addSpCart2(id, num) {
    return detail.post('/goodsDetail/addSpCart2', { id, num })
}
//删除购物车商品
export function delCartGoods(idArr) {
    return detail.post('/goodsDetail/delCartGoods', { idArr })
}
//购买成功
export function goBuy({ idArr, userId, list, total }) {
    return detail.post('/goodsDetail/goBuy', { idArr, userId, list, total })
}
//删除订单
export function delOrders(id) {
    return detail.post('/goodsDetail/delOrders', { id })
}
//立即购买
export function buyNow(item) {
    return detail.post('/favorites/buyNow', { item })
}

export function addComments({ id, data }) {
    return detail.post('/goodsDetail/addComments', { id, data })
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