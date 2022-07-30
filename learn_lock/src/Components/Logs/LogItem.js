import React from 'react';
import MyDate from "./MyDate";
import './LogItem.css'
import Card from "../UI/Card/card";
const LogItem = (props) => {
    const deleteItemHandler=()=>{
        const isDel=window.confirm('该操作不可恢复，确认吗')
        if(isDel){
            props.onDelLog()
        }
    }
    return (
        <Card className="item">
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