import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import CertsCheck from '../components/CertsCheck.vue'

const routes = [
    {
        path: "/",
        component: App,
    },
    {
        path: "/certs-check/",
        component: CertsCheck,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
