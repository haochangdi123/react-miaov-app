import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Skeleton from '../../component/skeleton'
import getWork from  '../../store/action/getWork'
import getMessageList from '../../store/action/getMessageList'

import Main from './main'

function Work(props) {
    let { data, loading, dispatch, match, loadEnd } = props
    let { id } = match.params
    console.log(props);

    // 这个方法可以在上拉加载中使用
    function getList(flag) {
        dispatch(getMessageList(id))
    }

    useEffect(() => {
        dispatch(getWork(id))
        getList()
        // 因为此页面是work详情页，会多次使用，所以离开页面就重置loading，这样就不用在action在请求数据前先设置loading：true了
        return ()=> {
            dispatch({
                type: "RSET_LOAD"
            })
            dispatch({
                type: "MESSAGE_RESET"
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
            {
                loadEnd 
                ? ""
                : <div className="goMore" onClick={() => getList(1)}>
                    加载更多
                </div>
            }
            
        </div>
    )
}

export default  connect(state=> ({...state.work,...state.messageList}))(Work)