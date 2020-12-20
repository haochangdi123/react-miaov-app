import { getInfo } from '../../api/index'

function getWork(article_id) {
    return function (dispatch) {
        return getInfo(article_id)
                .then((res) => {
                    dispatch({
                        type: 'WORK_LOADOVER',
                        data: res.data
                    })
                })
    }
}

export default getWork