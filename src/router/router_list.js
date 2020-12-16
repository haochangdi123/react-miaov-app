import React from 'react'
import Index from '../views/index/index'
import Login from '../views/login/index'
import Works from '../views/works/index'
import Course from '../views/course/index'
import Lecturer from '../views/lecturer/index'

const routerList = [
    {
        name: '首页',
        path: '/',
        exact: true, //精确匹配
        render(props) { // 通过props将路由信息传递给组件
            return <Index {...props} />
        }
    },
    {
        name: '登陆',
        path: '/login',
        exact: true, //精确匹配
        render(props) {
            return <Login {...props}/>
        }
    },
    {
        name: '课程安排',
        path: '/course',
        exact: true, //精确匹配
        render(props) {
            return <Course {...props}/>
        }
    },
    {
        name: '讲师团队',
        path: '/lecturer',
        exact: true, //精确匹配
        render(props) {
            return <Lecturer {...props}/>
        }
    },
    {
        name: '作品详情',
        path: '/works',
        exact: true, //精确匹配
        render(props) {
            return <Works {...props}/>
        }
    }
]

export default routerList