import { createRouter, createWebHistory } from "vue-router";

import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Main from "@/components/Main.vue";

import GraphicCards from "@/components/Products/GraphicCards.vue";
import MemoryModules from "@/components/Products/MemoryModules.vue";
import MotherBoards from "@/components/Products/MotherBoards.vue";

import Preview from "@/components/Preview.vue";
import GraphicCardsPreview from "@/components/Preview/GraphicCards.vue";
import MemoryModulesPreview from "@/components/Preview/MemoryModules.vue";
import MotherBoardsPreview from "@/components/Preview/MotherBoards.vue";

const routes = [
    {
        path: '',
        redirect: { name: 'Main' }
    },
    {
        name: 'Main',
        path: '/main',
        component: Main,
        redirect: { name: 'GraphicCards' },
        children: [
            {
                name: 'GraphicCards',
                path: 'graphic-cards',
                component: GraphicCards
            },
            {

                name: 'MemoryModules',
                path: 'memory-modules',
                component: MemoryModules
            },
            {
                name: 'MotherBoards',
                path: 'mother-boards',
                component: MotherBoards
            }
        ]
    },
    {
        name: 'Preview',
        path: '/preview',
        component: Preview,
        children: [
            {
                name: 'GraphicCardsPreview',
                path: 'graphic-cards-preview/:id',
                component: GraphicCardsPreview
            },
            {
                name: 'MemoryModulesPreview',
                path: 'memory-modules-preview/:id',
                component: MemoryModulesPreview
            },
            {
                name: 'MotherBoardsPreview',
                path: 'mother-boards-preview/:id',
                component: MotherBoardsPreview
            }
        ]
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        beforeEnter() {
            const token = localStorage.getItem('token')
            if (token) router.push({ name: 'Main' })
        }

    },
    {
        name: 'Register',
        path: '/register',
        component: Register,
    }
]

const router = createRouter({
    history: createWebHistory('/simple-market/'),
    routes
})

export default router;
