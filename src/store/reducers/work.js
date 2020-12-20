
function work(state={
    data: {},
    loading: true
},action) {
    switch (action.type) {
        case "RSET_LOAD":
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