import React,{useState} from 'react'
import Header from './header'
import Menu from './menu'

import '../assets/css/reset.css'
import '../assets/css/common.css'

//相当于一个框架页面，有公共的header和侧边栏
function Frame(props) {
    const [showMenu, setShowMenu] =  useState(false)
    function changeMenu() {
        setShowMenu(!showMenu)
    }
    function hideMenu() {
        setShowMenu(false)
    }
    return(
        <div>
            <Header changeMenu={changeMenu}/>
            <Menu showMenu={showMenu}/>
            <div
                id="main"
                style={{
                    transform: `translateX(${showMenu ? '3.5rem' : 0})`
                }}
                onTouchStart={hideMenu}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Frame