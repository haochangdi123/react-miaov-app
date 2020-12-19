import React, { useState } from 'react'
import { verify } from '../../api/index'

function LoginBox() {
    const [user,setUser] = useState('')
    const [password,setPasword] = useState('')
    const [vcode,setVcode] = useState('')
    const [vcodeShow, setvcodeShow] = useState(false)
    const [vcodeSrc, setvcodeSrc] = useState(`${verify}?${Date.now()}`)
    return (
        <div className="login_box">
            <figure className="loginImg">
                {/* <img src={logo}></img> */}
                <figcaption>如有账号,请直接登录</figcaption>
            </figure>
            <div className="login_from">
                <p>
                    <input
                        placeholder='用户名'
                        type='text'
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value)
                            console.log(user);
                        }}
                    ></input>
                </p>
                <p>
                    <input
                        placeholder='请输入密码'
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPasword(e.target.value)
                        }}
                    ></input>
                </p>
                <p>
                    <input
                        placeholder='验证码'
                        type='text'
                        value={vcode}
                        onChange={(e) => {
                            setVcode(e.target.value)
                        }}
                        onFocus={() => {
                            setvcodeShow(true)
                            console.log(vcodeSrc);
                        }}
                    ></input>
                    {
                        vcodeShow 
                            ? <img
                                className="verify"
                                src={vcodeSrc}
                                onClick={() => {
                                    setvcodeSrc(`${verify}?${Date.now()}`)
                                }}
                                alt=""
                              ></img>
                            : ''
                    }
                    
                </p>
                <button className="login_but"
                >登录</button>
                <p className="login_txt">
                    没有账号? <a onClick={() => {
                    }}>立即注册</a>
                </p>
            </div>
        </div>
    )
}

export default LoginBox