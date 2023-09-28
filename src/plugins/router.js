import { createRouter, createWebHistory } from "vue-router";
import homeView from '../pages/home.vue'
import signupView from '../pages/signup.vue'
import loginView from '../pages/login.vue'
import noView from '../pages/nopage.vue'
import porfileView from '../pages/profile.vue'
import settingView from '../pages/settings.vue'
import supportView from '../pages/support.vue'
import feedbackView from '../pages/feedback.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: '/sign-up',
        //     name: 'signup',
        //     component: signupView
        // },
        {
            path: '/login',
            name: 'login',
            component: loginView
        },
        {
            path: '/',
            name: 'home',
            component: homeView,
        },
        {
            path: '/profile',
            name: 'profile',
            component: porfileView
        },
        {
            path: '/settings',
            name: 'settings',
            component: settingView
        },
        {
            path: '/support',
            name: 'support',
            component: supportView
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: feedbackView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'nopage',
            component: noView
        }
    ]
})

export default router;