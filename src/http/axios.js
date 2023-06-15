import axios from "axios";
import useReqIntercepter from './reqIntercepter'
import useResIntercepter from './resIntercepter'

const http = axios.create({
  baseURL: window.pyUrl.base,
  timeout: 1000,
});


// 应用请求拦截器
useReqIntercepter(http)
// 应用响应拦截器
useResIntercepter(http)

export default http
