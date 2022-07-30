import React from 'react'
import Logs from "./Components/Logs/Logs";
import Card from "./Components/UI/Card/card";
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css'
import {useState} from "react";
/*
* 类组件必须要继承React。Component
* */
const App=()=>{
    //数据
    const [logsData, setLogsData]=useState([
        {
            id: '001',
            date: new Date(2021, 1, 20, 18, 30),
            desc: '学习九阳神功',
            time: 30
        },
        {
            id: '002',
            date: new Date(2022, 2, 10, 12, 30),
            desc: '学习降龙十八掌',
            time: 20
        },
        {
            id: '003',
            date: new Date(2022, 2, 11, 11, 30),
            desc: '学习JavaScript',
            time: 40
        },
        {
            id: '004',
            date: new Date(2022, 2, 15, 10, 30),
            desc: '学习React',
            time: 80
        }
        ]
    )
    const delLogByIndex=(index)=>{
        setLogsData(prevState => {
            const newLog=[...prevState]
            newLog.splice(
                index,1
            );
            return newLog
        })
    }
    //定义一个函数
    const saveLogHandler=(newLog)=>{
        //向新的日志中添加id
        newLog.id=Date.now()+'';

        // 将新的数据添加到数组中
        setLogsData([newLog,...logsData])
    }
    return <div className={'app'}>
        <LogsForm onSaveLog={saveLogHandler}/>
        <Logs logsData={logsData} onDelLog={delLogByIndex}/>
    </div>
}
export default App;