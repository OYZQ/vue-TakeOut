/**
 *路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'


//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:MSite
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})