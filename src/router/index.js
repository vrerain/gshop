/* eslint-disable */
import * as VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'


const routes = [
    {
        path: '/',
        redirect: '/msite',
    },
    {
        path: '/msite',
        component: Msite,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/login',
        component:Login
    }
];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes:routes
})

export default router;
