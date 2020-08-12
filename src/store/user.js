import Vue from 'vue'
import Vuex from 'vuex'
import { addSpCart, addSpCart2 } from '../network/Detail'

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
                return (item.id == obj.id, item.color == obj.color, item.size == obj.size)
            })
            state.user.Favorites.splice(num, 1)
        },
        addSpCart(state, obj) {
            let index = state.user.shoppingCart.findIndex((item) => {
                return (item.goodsid == obj.goodsid && item.color == obj.color && item.size == obj.size)
            })
            if (index < 0) {
                state.user.shoppingCart.push(obj)
                addSpCart(obj)
            }
            else {
                var num = ++state.user.shoppingCart[index].num
                addSpCart2(state.user.shoppingCart[index]._id, num)
            }

        }
    }
})

export default store