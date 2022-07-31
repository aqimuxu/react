import React, {useState} from 'react';
import MyDate from "./MyDate";
import './LogItem.css'
import Card from "../UI/Card/card";
import ConfirmModel from "../UI/ConfirmModel/ConfirmModel";
const LogItem = (props) => {
    const [showConfirm,setShowConfirm]=useState(false)
    const deleteItemHandler=()=>{
        //显示确认窗口
        setShowConfirm(true)
        // const isDel=window.confirm('该操作不可恢复，确认吗')
        // if(isDel){
        //     props.onDelLog()
        // }
    }
    const cancelHandler=()=>{
        setShowConfirm(false)
    }
    const okHandler=()=>{
        setShowConfirm(false)
        props.onDelLog()
    }
    return (
        <Card className="item">
            {showConfirm&&<ConfirmModel onCancel={cancelHandler} onOk={okHandler}/>}
            {/*日期容器*/}
            <MyDate date={props.date}/>
            {/*日志内容的容器   */}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
            <div>
                <div className={'delete' } onClick={deleteItemHandler}>x</div>
            </div>
        </Card>
    );
};

export default LogItem;