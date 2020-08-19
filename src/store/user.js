import Vue from 'vue'
import Vuex from 'vuex'
import { addSpCart, addSpCart2, delCartGoods, goBuy, delOrders } from '../network/Detail'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        addFavorites(state, obj) {
            state.user.Favorites.push(obj);
        },
        unFavorite(state, obj) {
            let num = state.user.Favorites.findIndex((item) => {
                return (item.goodsid == obj.goodsid && item.color == obj.color && item.size == obj.size)
            })
            state.user.Favorites.splice(num, 1)
        },
        addSpCart(state, obj) {
            let index = state.user.shoppingCart.findIndex((item) => {
                return (item.goodsid == obj.goodsid && item.color == obj.color && item.size == obj.size)
            })
            if (index < 0) {
                addSpCart(obj).then(data => {
                    state.user.shoppingCart.push(data)
                })
            }
            else {
                var num = ++state.user.shoppingCart[index].num
                addSpCart2(state.user.shoppingCart[index]._id, num)
            }
        },
        delsCarts(state, iArr) {
            let idArr = []
            for (let i = 0; i < iArr.length; i++) {
                idArr.push(state.user.shoppingCart[iArr[i]]._id)
            }
            delCartGoods(idArr)
            for (let i = 0; i < idArr.length; i++) {
                let num = state.user.shoppingCart.findIndex((item) => {
                    return item._id == idArr[i]
                })
                state.user.shoppingCart.splice(num, 1)
            }
        },
        settlement(state, { iArr, total }) {
            let idArr = []
            let list = []
            for (let i = 0; i < iArr.length; i++) {
                idArr.push(state.user.shoppingCart[iArr[i]]._id)
                list.push(state.user.shoppingCart[iArr[i]])
            }
            goBuy({ idArr, userId: state.user._id, list, total }).then(data => {
                state.user.Order.push(data)
            })
            for (let i = 0; i < idArr.length; i++) {
                let num = state.user.shoppingCart.findIndex((item) => {
                    return item._id == idArr[i]
                })
                state.user.shoppingCart.splice(num, 1)
            }
        },
        delOrders(state, id) {
            let num = state.user.Order.findIndex((item) => {
                return item._id == id
            })
            state.user.Order.splice(num, 1)
            delOrders(id)
        }
    }
})

export default store