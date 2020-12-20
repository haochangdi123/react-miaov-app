// 这里的loading，loadEnd可以根据采用的上拉组件更改
function messageList(state={
    messageData: [],
    page: 1,
    loading: false,
    loadEnd: false
},action) {
    switch (action.type) {
        case "MESSAGE_LOAD":
           return {
               ...state,
               loading: true
           }
        case "MESSAGE_LOADOVER":
           return {
               ...state,
               loading: false,
               page: ++state.page,
               messageData: [...state.messageData,...action.data]
           }
        case "MESSAGE_LOADEND":
            return {
                ...state,
                loadEnd: true
            }
        case "MESSAGE_RESET":
            return {
                messageData: [],
                page: 1,
                loading: false,
                loadEnd: false
            }
    }
    return state
}
export default messageList