import React from 'react';
import LogItem from "./LogItem";
import './Logs.css'
import Card from "../UI/Card/card";
//rsc+tab直接生成
const Logs = (props) => {


    //将数据放入JSX中
    const logItemDate = props.logsData.map((item,index)=> <LogItem key={item.id} onDelLog={()=>props.onDelLog(index)} date={item.date} desc={item.desc}
                                                                                time={item.time}/>);
    return (
        <Card className="logs">{
            logItemDate   // 不要忘记大括号
        }
        </Card>
    );
};

export default Logs;