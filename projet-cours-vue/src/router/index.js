// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/exo',
            name: 'exo',
            component: () => import('../views/Tp-binding.vue')
        },
          {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: '/exo-syledynamic',
            name: 'exo-styledynamic',
            component: () => import('../views/Exo-StyleDynamic.vue')
        }
    ]
});

export default router;
