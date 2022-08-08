// 接口的调用
import axios from "./axios";
export const getMenu=(param)=>{
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}
export const getData=()=>{
    return axios.request({
        url:'/home/getData',
        method: 'get'
    })
}
// export const getHome = () => {
//     return axios.request({
//       url: '/home/getData',
//       method: 'get'
//     })
//   }
// param   parse
export const getUser=(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
    })
}
