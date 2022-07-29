import React from 'react';
import LogItem from "./LogItem";
import './Logs.css'
import Card from "../UI/Card/card";
//rsc+tab直接生成
const Logs = () => {
    // 模拟一组从服务器中加载的数据
    const logsData = [
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
    ];
    //将数据放入JSX中
    const logItemDate = logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc}
                                                                                time={item.time}/>);
    return (
        <Card className="logs">{
            logItemDate   // 不要忘记大括号
        }
        </Card>
    );
};

export default Logs;