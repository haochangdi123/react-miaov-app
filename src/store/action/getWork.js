import { getInfo } from '../../api/index'

function getWork(article_id) {
    return function (dispatch) {
        // loading
        dispatch({
            type: 'WORK_LOAD'
        })
        return getInfo(article_id)
                .then((res) => {
                    console.log(res);
                    dispatch({
                        type: 'WORK_LOADOVER',
                        data: res.data
                    })
                })
    }
}

export default getWork