import { isGood,goGood,cancelGood } from '../../api/index'
//获取点赞状态
function getGood(article_id) {
    return function(dispatch) {
        return isGood(article_id).then((res) => {
            if(res.data.code === 0) {
                dispatch({
                    type: "GOOD",
                    goodId: res.data.gooid
                })
            } else {
                dispatch({
                    type: "RESET_GOOD"
                })
            }
        })
    }
}

// 点赞
function setGood(article_id) {
    return function(dispatch) {
        return goGood(article_id).then((res) => {
            if(res.data.code === 0) {
                // 点赞成功后获取goodId
                dispatch(getGood(article_id))
                return res
            }
        })
    }
}

// 取消点赞
function cancelGoodFn({article_id,goodid}) {
    return function(dispatch) {
        return cancelGood(goodid,article_id).then((res) => {
            if(res.data.code === 0) {
                dispatch({
                    type: "CANCLE_GOOD"
                })
                return res
            }
        })
    }
}

export {
    getGood,
    setGood,
    cancelGoodFn
}