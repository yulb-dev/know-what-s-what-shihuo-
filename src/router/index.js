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

import axios from 'axios'

const init = axios.create({
    baseURL: 'http://127.0.0.1:6060/home',
    timeout: 1000,
    withCredentials: true   //设置此项  会携带跨域cookie
});

// 处理响应拦截
init.interceptors.response.use(res => {
    return res.data
})

//防止重复点击报错
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
    return originalPush.call(this, location).catch(err => err)
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
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (store.state.user)
        next()
    else {
        init().then(({ data, data1 }) => {
            if (data) {
                data.shoppingCart = data1;
                store.state.user = data;
            }
            next()
        })

    }
})

export default router
