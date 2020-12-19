import axios from "axios";
import qs from "qs";
// axios.create 可以使用自定义配置一个axios
const http = axios.create({
  baseURL: "/miaov",    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  withCredentials: true,   // 携带cookie以校验身份（一定要加，因为是通过cookie验证用户的身份的）
  transformRequest: (data) => { // 请求拦截器
    return qs.stringify(data);   // 对 data 进行转换处理，防止请求出现中文
  },
});

export default http;