import React from 'react'

function Menu(props) {
    const { showMenu } = props
    return (
        <nav className={"menus " + (showMenu ? "show" : "unshow")}>
            <a to='/home' className="iconfont icon-home active">首页</a>
            <a to='/class' className="iconfont icon-kecheng">课程安排</a>
            <a to='/teacher' className="iconfont icon-peixunjiangshi">讲师团队</a>
        </nav>
    )
}

export default Menu