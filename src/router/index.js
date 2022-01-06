import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../views/mainPage'

Vue.use(VueRouter)

const routes = [
    // 两种配置路由的方式
    {
        path: '/',
        redirect: 'mainPage' // 重定向
    },
    {
        path: '/mainPage',
        component: mainPage
    },
    {
        path: '/asidePage',
        name: 'asidePage',
        component: () => import('@/views/asidePage')
    }
]

const router = new VueRouter({
    // 去掉url中的#
    mode: 'history',
    routes
})

export default router
