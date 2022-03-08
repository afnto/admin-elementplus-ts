import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ElMessage } from "element-plus";

axios.defaults.baseURL = "http://192.168.101.12:8500";
axios.defaults.timeout = 3 * 1000;
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Authorization"] = localStorage.getItem("token") || "";

// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log('请求拦截',config)
    return config;
  },
  (error: AxiosError) => {
    return error;
  }
);
// 响应拦截
axios.interceptors.response.use(
  (result: AxiosResponse) => {
    console.log('响应拦截',result)
    // 返回数据前做了什么
    // if (result.data.code < -100) {
    //   if (result.data.msg) {
    //     ElMessage.error("网络异常,请联系管理员");
    //   }
      return Promise.reject(result.data.data);
    // }
    // return result;
  },
  (err: AxiosError) => {
    // 返回数据前做了什么
    return Promise.reject(err);
  }
);
export default axios;
