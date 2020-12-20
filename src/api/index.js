import ajax from './ajax'
const BASE = ''
//判断是否登录
export const isLogin=()=>{
  return ajax(BASE + '/user/islogin','POST')
}

//注册
export const Register=(verify,username,password,repassword)=>{
  return ajax(BASE + '/user/register',{verify,username,password,repassword},'POST')
}

//登录请求 verify验证码,username用户,password密码
export const Login=(verify,username,password)=>{
  return ajax(BASE + '/user/login',{verify,username,password},'POST')
}

/*
  退出登录
*/
export const Logout=()=>{
  return ajax(BASE + '/user/login','POST')
}

//首页内容
export const getHome=(order,sort,category_id,recommend)=>{
  return ajax(BASE + '/lecturer/lists?page=1&rows=20',{order,sort,category_id,recommend},'POST')
}

//讲师
export const getTeacher=(order,sort,category_id,recommend)=>{
  return ajax(BASE + '/lecturer/lists?page=1&rows=100',{order,sort,category_id,recommend},'POST')
}

//详情
export const getInfo=(article_id)=>{
  return ajax(BASE + '/lecturer/info',{article_id},'POST')
}

//留言
export const getComment=(article_id)=>{
  return ajax(BASE + '/lecturer/getcomment?page=1&rows=20',{article_id},'POST')
}

//评论接口
export const addComment=(article_id,content)=>{
  return ajax(BASE + '/lecturer/addcomment',{article_id,content},'POST')
}

//是否点赞接口
export const isGood=(article_id)=>{
  return ajax(BASE + '/lecturer/getgood',{article_id},'POST')
}

//点赞接口
export const goGood=(article_id)=>{
  return ajax(BASE + '/lecturer/good',{article_id},'POST')
}

//取消点赞接口
export const cancelGood=(goodid,article_id)=>{
  return ajax(BASE + '/lecturer/cancelgood',{goodid,article_id},'POST')
}

//验证码图片   了避免缓存使用时加时间戳
//获取图片时，后台会在浏览器的cookie中设置PHPSESSID，以便我们校验验证码
export const verify = `miaov/user/verify`
 