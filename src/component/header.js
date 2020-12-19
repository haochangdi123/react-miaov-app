import React, { useEffect,useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useBack } from '../hooks/index'
import { connect } from 'react-redux'
import isLoginFn from '../store/action/isLogin'
import LogoutFn from '../store/action/logOut'

// 显示右上角用户icon
function GetUser(path,user,props,isBtnShow,setBtnShow) {
    if (path === "/login") {
      return "";
    }
    if (user) {
      return (
        <span className="header-btn-right">
          <span
            className="header-user"
            onClick={() => {
                setBtnShow(!isBtnShow)
            }}
          >
            {user}
          </span>
          <span
            className="header-logout-btn"
            style={{
              display: isBtnShow ? "block" : "none",
            }}
            onClick={() => {
              props.dispatch(LogoutFn());
            }}
          >
            退出
          </span>
        </span>
      );
    }
    return <Link className="user" to="/login" />;
}

function Header(props) {
    const path = props.location.pathname
    const back = useBack(props.history)
    const { user } = props
    const [isBtnShow,setBtnShow] = useState(false)

   
    useEffect(() => {
        // 已进入页面判断是否登陆，如若登陆设置用户名
        props.dispatch(isLoginFn())
    },[])

    function goBack() {
        back()
    }
    return (
        <header id="header">
            <nav className="menu">
                {
                    path === '/login' 
                    ? <a className="header-btn-left iconfont icon-back" onClick={goBack}>back</a>
                    : <a className="header-btn-left iconfont icon-hycaidan" ></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {GetUser(path,user,props,isBtnShow,setBtnShow)}
        </header>
    )
}


export default connect(state => {
    return {
        user: state.getUser  //getUser为你定义的reducer的名字
    }
})(withRouter(Header))