function work(state={
    data: {},
    loading: false
},action) {
    switch (action.type) {
        case "WORK_LOAD":
           return {
               data: {},
               loading: true
           }
        case "WORK_LOADOVER":
           return {
               loading: false,
               data: action.data
           }
    }
    return state
}
export default work