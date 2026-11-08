import { createRouter, createWebHistory } from 'vue-router'

import Profile from '../views/Profile.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'portfolio',
            component: Profile,
        },
        {
            path: '/certs-check',
            name: 'certs-check',
            component: () => import('../views/CertsCheck.vue'),
        },
        {
            path: '/commercial-law',
            name: 'commercial-law',
            component: () => import('../views/CommercialLaw.vue'),
        },
        {
            path: '/userdata-external-transmission',
            name: 'userdata-external-transmission',
            component: () => import('../views/UserdataExternalTransmission.vue'),
        },
    ],
})

export default router
