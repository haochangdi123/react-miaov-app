import HTTP from './http';
function login() {
    return function(dispatch) {
        HTTP.post('user/login').then((res) => {
            console.log(res);
        })
    }
}


export default login