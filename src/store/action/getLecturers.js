import { getTeacher } from '../../api/index'

function getLecturers() {
    return function (dispatch) {
        // 这个接口是死的
        return getTeacher("desc","sort",2)
                .then((res) => {
                    dispatch({
                        type: 'LOAD_LECTURERS',
                        data: res.data
                    })
                })
    }
}

export default getLecturers