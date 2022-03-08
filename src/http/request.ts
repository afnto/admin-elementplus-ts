import axios from "@/http/axios";

/**
 * 封装请求方式
 */
const request = {
  get(url: string, params: any, callback: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  post(url: string, params: any, callback: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  put(url: string, params: any, callback: any) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(
        (res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  errorHandle(status: any, other: any) {
    // 状态码判断
    switch (status) {
      // 401: 未登录状态，跳转登录页
      case 401:
        // toLogin();
        break;
      // 403 token过期
      // 清除token并跳转登录页
      case 403:
        // tip('登录过期，请重新登录');
        // localStorage.removeItem('token');
        // store.commit('loginSuccess', null);
        setTimeout(() => {
          // toLogin();
        }, 1000);
        break;
      // 404请求不存在
      case 404:
        // tip('请求的资源不存在');
        break;
      default:
        console.log(other);
    }
  },
};
export default request;
