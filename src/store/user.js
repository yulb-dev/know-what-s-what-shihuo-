import Vue from 'vue'
import Vuex from 'vuex'

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
        }
    }
})

export default store