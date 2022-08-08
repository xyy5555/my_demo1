import Vue from 'vue'
import VueRouter from 'vue-router'
// im
// import Home from '../views/Home.vue'
// 引入全局router
Vue.use(VueRouter)
// 配置 定义一些路由
// 每个路由都需要映射到一个组件
const routes=[{
    path:'/',
    name:'Main',
    // 按需引入
    // component:Home
    component:()=>import('../views/Main.vue'),
    // 跳转页面
    redirect:'/home',
    // redirect:'/login',
  
    children:[
        // {
        //     path:'/home',
        //     name:'home',
        //     component:()=>import('../views/home')
        // },
        // {
        //     path:'/user',
        //     name:'user',
        //     component:()=>import('../views/User')
        // },
        // {
        //     path:'/mall',
        //     name:'mall',
        //     component:()=>import('../views/mall')
        // },
        // {
        //     path:'/page1',
        //     name:'page1',
        //     component:()=>import('../views/other/pageOne')
        // },
        // {
        //     path:'/page2',
        //     name:'page2',
        //     component:()=>import('../views/other/pageTwo')
        // }
    ]
},
{
    path:'/login',
    name:'login',
    component:()=>import('../views/login/login.vue')

}
    // {
    //     path:'/user',
    //     name:'User',
    //     component:()=>import('../views/User/index.vue')
    // }
]
const router= new VueRouter({
    mode:'history',
    routes
})
// 对外暴露
export default router