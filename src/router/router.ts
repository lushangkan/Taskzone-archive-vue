import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "../views/WelcomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            name: 'welcome',
            path: '/welcome',
            component: WelcomeView
        }
    ]
})



export default router
