import axios from 'axios'
import config from '../config';
const baseUrl=process.env.NODE_ENV==='development'? config.baseUrl.dev:config.baseUrl.pro
// axios工具类，用es6语法
class HttpRequest{
    constructor(baseUrl){
        this.baseUrl=baseUrl
    }
    // 定义axios相关配置
    getInsideConfig(){
        const config ={
            // 定义初始值
            baseUrl:this.baseUrl,
            header:{}
        }
        return config
    }
    // 拦截器相关函数
    interceptors(instance){
       // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            console.log(response,'response')
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            console.log(error,'error')
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么error
            return Promise.reject(error);
            });
            }
    request(options){
        // 创建实例
        const instance=axios.create()
        options={...this.getInsideConfig(),...options}
        // 调用拦截器
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)