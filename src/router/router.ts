import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "../views/WelcomeView.vue";
import DayTaskView from "../views/DayTaskView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            name: 'daytask',
            path: '/',
            alias: '/daytask/:date',
            component: DayTaskView,
            props: (route) => ({ date: route.params.date })
        },
        {
            name: 'welcome',
            path: '/welcome',
            component: WelcomeView
        }
    ]
})



export default router
