function lecturers(state={
    data: []
},action) {
    switch(action.type) {
        case "LOAD_LECTURERS":  
            return {
                data: action.data
            }
    }
    return state
}
export default lecturers