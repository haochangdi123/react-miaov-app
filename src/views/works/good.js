import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGood, setGood, cancelGoodFn } from "../../store/action/good"
import { withRouter } from "react-router-dom";


function Good(props) {
  let { goodNum, good, user, dispatch, id, goodId } = props;
  
  let { history } = props;
  // 类似于派生属性
  let [goodCount, setGoodCount] = useState(parseInt(goodNum));
  useEffect(() => {
    dispatch(getGood(id));
    setGoodCount(goodNum)
  }, [user]);
  return (
    <p className="miiaov_zan">
      <span>有{goodCount}人学的很赞</span>
      <span
        className={`iconfont icon-tuijian1 ${good ? "good" : ""}`}
        onTouchEnd={() => {
          if (user) {
             console.log('==========')
            console.log(good)
            if (good) {
              dispatch(cancelGoodFn({ article_id: id, goodid: goodId })).then(
                (res) => {
                  if (res) {
                    setGoodCount(--goodCount);
                    alert('取消点赞')
                  }
                }
              );
            } else {
              dispatch(setGood(id)).then((res) => {
                if (res) {
                  setGoodCount(++goodCount);
                  alert('点赞成功')
                }
              });
            }
          } else {
            history.push("/login");
          }
        }}
      >
        赞
      </span>
    </p>
  );
}
export default withRouter(
  connect((state) => {
    // console.log(state);
    return {
      ...state.good,
      user: state.getUser,
    };
  })(Good)
);
