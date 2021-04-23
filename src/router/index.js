import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/user'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/ShopCart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Login = () => import('../views/login/login.vue')
const Recommend = () => import('../views/recommend/recommend.vue')
const Favorites = () => import('../views/favorites/favorites.vue')
const Order = () => import('../views/order/order.vue')
const specialArea = () => import('../views/specialArea/specialArea.vue')
const Search = () => import('../views/search/search.vue')
const CatePage = () => import('../views/categoryPage/categoryPage.vue')
const settingsPage = () => import('../views/settingsPage/settingsPage.vue')

import { routerReq } from '../network/index'

// 处理响应拦截
routerReq.interceptors.response.use(res => {
    return res.data
})

//防止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/favorites',
        component: Favorites
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/specialArea',
        component: specialArea
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/catePage',
        component: CatePage
    },
    {
        path: '/settings',
        component: settingsPage
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

router.beforeEach((to, from, next) => {
    if (store.state.user)
        next()
    else {
        routerReq().then(({ data, data1, data2 }) => {
            if (data) {
                data.shoppingCart = data1;
                data.Order = data2
                store.state.user = data;
                next()
            }
            else {
                if (to.path == '/favorites')
                    router.replace('/profile')
                if (to.path == '/order')
                    router.replace('/profile')
                if (to.path == '/settings')
                    router.replace('/profile')
                next()
            }

        })

    }
})

export default router
