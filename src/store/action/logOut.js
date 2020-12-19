import { Logout } from '../../api/index'
function LogoutFn() {
    return function (dispatch) {
        Logout().then((res) => {  
            if (res.data.code === 0) {
                dispatch({
                    type: "LOGINOUT"
                })
            }
        })
    }
}

export default LogoutFn