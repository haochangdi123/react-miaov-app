import { Register } from '../../api/index'
function RegisterFn({verify,username,password,repassword}) {
    return function (dispatch) {
        return Register(verify,username,password,repassword)
            .then((res) => {
                return res.data
            })
    }
}

export default RegisterFn