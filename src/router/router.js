import {createRouter,createWebHistory} from "vue-router";
import VWrapper from "@/components/V-wrapper";
import VTaskchang from "@/components/v-taskchang";


const routes = [
    {
        path:'/',
        name:'TaskList',
        component:VWrapper,
    },
    {
        path:'/change',
        name:'changeTask',
        component:VTaskchang,
        props: true
    }
]
const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router