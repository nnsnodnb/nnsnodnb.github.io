import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/Profile.vue'
import CertsCheck from '../components/CertsCheck.vue'

const routes = [
    {
        path: "/",
        component: Profile,
    },
    {
        path: "/certs-check",
        component: CertsCheck,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
