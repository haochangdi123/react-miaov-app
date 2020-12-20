import React from 'react'
import Artic from './artic'
import Good from './good'
import MessagList from './messagList'
 
function Mian (props) {
    let  { data } = props
    return(
        <div>
            {
                data && data.image_path && data.image_path.length
                ?  <div className="work-banner">
                        {
                            data.image_path.map((item) => {
                                return <img src={item.path} alt="" key={item.id} className="wrok-img"/>
                            })
                        }
                    </div>
                :  ''
            }
            <div className="miiaov_box">
                <Artic data={data}/>
            </div>
            <div className="miiaov_comment">
                <Good id={data.id} goodNum={data.good}></Good>
                <MessagList></MessagList>
            </div>
        </div>
    )
}

export default Mian