function good(state={
    good: false,
    goodId: 0
} ,action) {
    switch(action.type) {
        // 已经点赞
        case "GOOD":  
            return {
                good: true,
                goodId: action.goodId
            }
        case "CANCLE_GOOD": // 取消点赞
            return {
                    good: false,
                    goodId: 0
                }
        case "RESET_GOOD": // 重置
            return {
                    good: false,
                    goodId: 0
                }
    }
    return state
}
export default good