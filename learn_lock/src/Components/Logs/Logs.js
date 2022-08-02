import React, {useState} from 'react';
import LogItem from "./LogItem";
import './Logs.css'
import Card from "../UI/Card/card";
import LogFilter from "./LogFilter/LogFilter";
//rsc+tab直接生成
const Logs = (props) => {
    const [year,setYear]=useState(2022)
    const changeYearHandler=year=>{
        setYear(year)
    }
    let filterData = props.logsData.filter(item=>item.date.getFullYear()===year)
    //将数据放入JSX中
    let logItemDate = filterData.map((item)=> <LogItem key={item.id} onDelLog={()=>props.onDelLog(item.id)} date={item.date} desc={item.desc}
                                                                                time={item.time}/>);
    if(logItemDate.length===0){
        logItemDate=<p className='no-logs'>没找到日志</p>
    }
    return (
        <Card className="logs">
            <LogFilter
                year={year}
                onYearChange={changeYearHandler}
            />
            {
            logItemDate   // 不要忘记大括号
            }
        </Card>
    );
};

export default Logs;