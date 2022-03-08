// 引入公共js文件
import request from "@/http/request";

export const getArticleListByCategory = (data: any) => request.get("/index.php/article/getArticleListByCategory", data, '');
export const adminLogin = (data: any) => request.post("/passWordLogin", data, '');
