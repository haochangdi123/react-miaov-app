import React, {useState} from 'react'
import './login.css'

import LoginBox from './login'
import RegisterBox from './register'

function Login() {
    const [Deg, setDeg] = useState(0)
    return (
        <div className="warpBox">
            <h2 className="login_register">
                <p>登录&注册</p>
                <span>login&registered</span>
            </h2>
            <div className="login_warp">
                <div className="login_register_box" style={{
                    transform: `rotateY(${Deg}deg)`
                }}>
                    <LoginBox setDeg={setDeg}></LoginBox>
                    <RegisterBox setDeg={setDeg}></RegisterBox>
                </div>
            </div>
        </div>
    )
}

export default Login