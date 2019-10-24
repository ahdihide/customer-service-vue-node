import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Livechat from './pages/Livechat'

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            title : 'Home',
            name : 'home',
            component : Home
        
        },
        {
            path: '/live-chat',
            title : 'Live chat',
            component : Livechat
        }
    ]
})

export default router