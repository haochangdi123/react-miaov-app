import { Login } from '../../api/index'
function login() {
    return function(dispatch) {
        Login().then((res) => {
            console.log(res);
        })
    }
}


export default login