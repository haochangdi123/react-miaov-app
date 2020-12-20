//刚进页面时loading为false，表示未加载数据，显示骨架屏，加载数据时和之后loading为true，隐藏骨架屏，离开页面重置loading为false
function work(state={
    data: {},
    loading: false
},action) {
    switch (action.type) {
        case "RSET_LOAD":
           return {
               data: {},
               loading: false
           }
        case "WORK_LOADOVER":
           return {
               loading: true,
               data: action.data
           }
    }
    return state
}
export default work