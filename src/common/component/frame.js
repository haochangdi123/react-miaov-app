import React from 'react'
import Header from './header'
import Menu from './menu'

import '../css/reset.css'
import '../css/common.css'

//相当于一个框架页面，有公共的header和侧边栏
function Frame(props) {
    return(
        <div>
            <Header />
            <Menu />
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}

export default Frame