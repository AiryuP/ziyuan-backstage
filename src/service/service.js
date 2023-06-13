//引入封装好的 axios
import Axios from './axios'
 
//实例化
const instance = Axios()

//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
const header = {
  Accept: 'application/json;charset=UTF-8',
}
 
//创建需要的请求方法:get post put delete
//url:请求的接口地址
//params:请求参数
//headers:请求头
export default {
  get(url, params) {
    return instance.get(url, {params, header})
  },
  post(url, params) {
    return instance.post(url, params, {header})
  },
  put(url, params) {
    return instance.put(url, params, {header})
  },
  delete(url, params) {
    return instance.delete(url, {params, header})
  }
}