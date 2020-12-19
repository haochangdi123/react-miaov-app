import { isLogin } from '../../api/index'
function isLoginFn() {
    return function (dispatch) {
        isLogin().then((res) => {
            // 登陆
            if (res.data.code === 0) {
                dispatch({
                    user: res.data.username,
                    type: "LOGIN"
                })
            }
        })
    }
}

export default isLoginFn