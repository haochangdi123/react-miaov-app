import React from 'react'
import { connect } from 'react-redux'
import image from '../../assets/images/comment_photo.png';

function MessageList(props) {
    let {messageData} = props
    return(
        <ul className="comment_list" >
            {
                messageData.map((item,index) => {
                    return (
                        <li key={index}>
                            <div className="user_comment clearfix">
                                <img src={image} />
                                <span>{item.username}</span>
                            </div>
                            <div className="comment_txt">
                                {item.content}
                            </div>
                            <div className="comment_footer">
                                {item.create_time}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default   connect(state=> state.messageList)(MessageList)