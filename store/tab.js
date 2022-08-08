import Cookies from "js-cookie"
// import router from "../router"
export default {
    state:{
       isCollapse:false,
       tabsList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'home'
            }
       ],
       currentMenu:null,
       menu:[]
    },
    // 改变state方法
    mutations:{
        // 定义方法
        CollapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state,val){
            if(val.name!== 'home'){
                state.currentMenu=val
                const result= state.tabsList.findIndex(item=>item.name===val.name)
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMenu=null
            }
        },
        closeTag(state,val){
           const result= state.tabsList.findIndex(item=>item.name===val.name)
            state.tabsList.splice(result,1)
        },
        setMenu(state,val){
            state.menu=val
            Cookies.set('menu',JSON.stringify(val))

        },
        clearMenu(state){
            state.menu=[]
            Cookies.remove('menu')
        },
        addMenu(state,router){
            if(!Cookies.get('menu')){
                return
            }
            const menu=JSON.parse(Cookies.get('menu'))
            state.menu=menu
            const menuArray=[]
            menu.forEach(item=>{
                if(item.children){
                    item.children=item.children.map(item=>{
                        item.component=() => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component=()=>import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            // 路由的动态添加
            menuArray.forEach(item=> {
              router.addRoute('Main',item)
            })

        }
    }
}