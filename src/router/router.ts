import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TasksView from '@/views/TasksView.vue'
import StatsView from "@/views/StatsView.vue";
import SettingsView from "@/views/SettingsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: TasksView
        },
        {
            path: '/stats',
            name: 'Stats',
            component: StatsView
        },
        {
            path: '/settings',
            name: 'Settings',
            component: SettingsView
        }
    ]
})



export default router
