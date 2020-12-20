import { getComment } from '../../api/index'

function getMessageList(article_id) {
    return function (dispatch,getState) {
        dispatch ({
            type: 'MESSAGE_LOAD'
        })
        // 获取redux的state
        let {page} = getState().messageList 
        return getComment(page,article_id)
                .then((res) => {
                    if(!res.data.length) {
                        dispatch({
                            type: 'MESSAGE_LOAD'
                        })
                    }
                    dispatch({
                        type: 'MESSAGE_LOADOVER',
                        data: res.data
                    })
                    return true
                })
    }
}

export default getMessageList