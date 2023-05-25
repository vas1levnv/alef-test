import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import Preview from "@/pages/Preview.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/preview',
        component: Preview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router