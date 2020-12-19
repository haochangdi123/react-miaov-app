import { Login } from '../../api/index'
function login({username,password,verify}) {
    return function(dispatch) {
        return Login(username,password,verify).then((res) => {
            // 登陆成功
            if (res.data.code === 0) {
                // 更改redux中的login
                dispatch({
                    type: 'LOGIN',
                    user: username
                })
            }
            return res.data
        })
    }
}


export default login