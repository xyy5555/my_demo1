// 对Ajax请求进行拦截
// 引入mock.js
import Mock from 'mockjs'
// 引入回调函数
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permission from './mockServeData/permission';
Mock.mock('/home/getData',homeApi.getStatisticalData)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'get',userApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permission.getMenu)