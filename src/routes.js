import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Livechat from './pages/Livechat'
import Help from './pages/Help'

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
        },
        {
            path : '/help',
            title : 'Bantuan',
            component : Help
        }
    ]
})

export default router