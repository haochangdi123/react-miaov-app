import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Skeleton from '../../component/skeleton'
import getWork from  '../../store/action/getWork'

import Main from './main'

function Work(props) {
    let { data, loading, dispatch, match } = props
    let { id } = match.params
    console.log(data, loading);
    useEffect(() => {
        dispatch(getWork(id))
        // 因为此页面是work详情页，会多次使用，所以离开页面就重置loading，这样就不用在action在请求数据前先设置loading：true了
        return ()=> {
            dispatch({
                type: "RSET_LOAD"
            })
        }
    }, [])
    return (
        <div >
            {
                loading
                    ? <Skeleton />
                    : <Main data={data} />
            }
           
        </div>
    )
}

export default  connect(state=> ({...state.work}))(Work)