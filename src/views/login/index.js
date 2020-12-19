import React from 'react'
import './login.css'

import LoginBox from './login'

function Login() {
    return (
        <div className="warpBox">
            <h2 className="login_register">
                <p>登录&注册</p>
                <span>login&registered</span>
            </h2>
            <div className="login_warp">
                <div className="login_register_box">
                    <LoginBox></LoginBox>

                    <div className="register_box">
                        <h3>注册账号</h3>
                        <div className="login_from">
                            <p>
                                <input placeholder='用户名'
                                ></input>
                            </p>
                            <p>
                                <input placeholder='请输入密码'                                       
                                ></input>
                            </p>
                            <p>
                                <input placeholder='请确认密码'                                   
                                ></input>
                            </p>
                            <p>
                                <input
                                ></input>
                            </p>
                            <button className="login_but"
                            >马上注册</button>
                            <p className="login_txt">
                                已有账号? <a>立即登录</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login