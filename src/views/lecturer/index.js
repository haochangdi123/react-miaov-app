import React, {useEffect,useState} from 'react'
import '../../assets/css/teacher.css'
import { connect } from 'react-redux'
import getLecturers from '../../store/action/getLecturers'

function Lecturer(props) {
    const {data,dispatch} = props
    const [isLoad, setLoad] = useState(false)
    const [isLoad2, setLoad2] = useState(false)
    const [isLoad3, setLoad3] = useState(false)
    const [isLoad4, setLoad4] = useState(false)
    const newData = [] //将data分为3个一组
    for (let i = 0; i < data.length; i+=3) {
        let newArr = [];
        let end = i+3
        end = end > data.length ? data.length : end;
        for (let j = i; j < end; j++) {
            newArr.push(data[j])
        }
        newData.push(newArr)
    }
    useEffect(() => {
        dispatch(getLecturers())
    },[])
    return (
        <div>
            <div className="teacher_banner">
                <h2><span>团队</span></h2>
                {
                    data && data.length
                        ? (
                             <div className="teacher_photo_list">
                                {
                                    data.map((item,index) => {
                                        return (
                                            <li key={index}>
                                                <img src={item.icon} alt="" />
                                                <p>{item.title}</p>
                                            </li>
                                        )
                                    })
                                }
                             </div>
                        )
                        : ''
                }
            </div>

             <div className="teacher_index">
                <h2>加入我们</h2>
                <ul className="teacher_list clearfix">
                    <li
                        onTouchStart={() => {
                            setLoad(true)
                        }}
                        onTouchEnd={() => {
                            setLoad(false)
                        }}
                        className={isLoad ? "active" : ""}
                    >
                        <div className="message_li">
                            <h3>web讲师</h3>
                            <p>人数：人数不限，多多益善</p>
                            <p>薪资：面议</p>
                        </div>
                    </li>
                    <li
                        onTouchStart={() => {
                            setLoad2(true)
                        }}
                        onTouchEnd={() => {
                            setLoad2(false)
                        }}
                        className={isLoad2 ? "active" : ""}>
                        {/* <p className={isLoad2 ? " activep" : "pppp"} >new</p> */}
                        <div className="message_li">
                            <h3>课程顾问</h3>
                            <p>人数：3人</p>
                            <p>薪资：底薪+提成</p>
                        </div>
                    </li>
                    <li onTouchStart={() => {
                        setLoad3(true)
                    }}
                        onTouchEnd={() => {
                            setLoad3(false)
                        }}
                        className={isLoad3 ? "active" : ""}>
                        <div className="message_li">
                            <h3>客服</h3>
                            <p>人数：3人</p>
                            <p>薪资：面议</p>
                        </div>
                    </li>
                    <li onTouchStart={() => {
                        setLoad4(true)
                    }}
                        onTouchEnd={() => {
                            setLoad4(false)
                        }}
                        className={isLoad4 ? "active" : ""}>
                        <div className="message_li">
                            <h3>行政前台助理</h3>
                            <p>人数：3人</p>
                            <p>薪资：底薪+提成</p>
                        </div>
                    </li>
                </ul>
                <div className="welcome clearfix">
                    <div className="welcome_photo">

                    </div>
                    <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……<span>本招聘信息长期有效</span></p>
                </div>
            </div>

            <div className="foot">
                <div className="phone clearfix">
                    <a href="#">hr_recruit@miaov.com</a>
                    <a href="#">010-57269690</a>
                </div>
                <nav className="foot_tit clearfix">
                    <a href="#">网站首页</a>
                    <a href="#">课程安排</a>
                    <a href="#">学员作品</a>
                    <a href="#">视频教程</a>
                    <a href="#">关于我们</a>
                    <a href="#">在线留言</a>
                    <a href="#">常见问题</a>
                </nav>
                <p className="copyright">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
            </div>
        </div>
    )
}

export default connect(state => state.lecturers)(Lecturer)