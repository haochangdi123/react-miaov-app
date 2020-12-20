import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import getWork from  '../../store/action/getWork'

function Work(props) {
    let { data, loading, dispatch, match } = props
    let { id } = match.params
    console.log(data, loading);
    useEffect(() => {
        dispatch(getWork(id))
    }, [])
    return (
        <div>
            work
        </div>
    )
}

export default  connect(state=> ({...state.work}))(Work)