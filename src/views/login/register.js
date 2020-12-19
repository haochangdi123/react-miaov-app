import React, { useState } from 'react'
import { verify } from '../../api/index'
import { connect } from 'react-redux'
import RegisterFn from '../../store/action/register'

function RegisterBox(props) {
    const [user,setUser] = useState('')
    const [password,setPasword] = useState('')
    const [repassword,setReasword] = useState('')
    const [vcode,setVcode] = useState('')
    const [vcodeShow, setvcodeShow] = useState(false)
    const [vcodeSrc, setvcodeSrc] = useState(`${verify}?${Date.now()}`)

    function register() {
        props.dispatch(
            RegisterFn({
                verify: vcode,
                username: user,
                password,
                repassword
            })
        ).then(res => {
            if (res.code === 0) {
               props.setDeg(0)
            } else {
               alert(res.msg)
            }
        })
        
    }
    return (
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="login_from">
                <p>
                    <input
                        placeholder='用户名'
                        type='text'
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value)
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
                        placeholder='请输入密码'
                        type='password'
                        value={repassword}
                        onChange={(e) => {
                            setReasword(e.target.value)
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
                <button
                    className="login_but"
                    onClick={register}
                >马上注册</button>
                <p className="login_txt">
                    已有账号?
                    <a onClick={() => {
                        props.setDeg(0)
                    }}>立即登录</a>
                </p>
            </div>
        </div>
    )
}

export default connect(res=> {
    return res
})(RegisterBox)