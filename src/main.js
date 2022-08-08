import Vue from 'vue'
import App from './App.vue'
// 引入elementui
import { Button,
      Radio,
      Container, 
      Main, 
      Aside, 
      Header, 
      Menu, 
      Submenu, 
      MenuItem, 
      MenuItemGroup, 
      Dropdown, 
      DropdownMenu, 
      DropdownItem, 
      Row, 
      Col, 
      Card, 
      Table, 
      TableColumn, 
      Breadcrumb, 
      BreadcrumbItem ,
      Tag,
      Form,
      FormItem,
      Input,
      
      Select,
      Switch,
      Option,
      DatePicker,
      Dialog,
      Pagination,
    MessageBox,
  Message} from 'element-ui';
      
// 引入elementui样式文件
import 'element-ui/lib/theme-chalk/index.css';
// 引入router
import router from '../router'
// 引入样式
import './assets/less/index.less'
// 引入store
import store from '../store'
// 引入axio
import http from 'axios'
import '../Api/mock'
// import { from } from 'core-js/core/array';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)

Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$http = http
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message 
// 导航守卫
router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  let token=store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  } else{
    next()
  }
})
new Vue({
  // 引入router
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
