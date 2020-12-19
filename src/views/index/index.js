import React from 'react'
import { connect } from 'react-redux'
import login from '../../store/action/login' // 获取action方法

function Index(props) {
    console.log(props); //可以获取到react-redux的dispatch方法和reducers中定义的方法了
    
    return (
        <div>
            <p>Index</p>
            <div onClick={()=> {props.dispatch(login())}}>login</div>
        </div>
    )
}

export default  connect(res=> {
    return res
})(Index)