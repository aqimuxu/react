import React, {useState} from 'react';
import Card from "../UI/Card/card";
import './LogsForm.css'
const LogsForm = (props) => {
    const [inputDate,setInputDate]=useState('');
    const [inputDesc,setInputDesc]=useState('');
    const [inputTime,setInputTime]=useState('');

    const dateChangeHandler=(e)=>{
        setInputDate(e.target.value)
    }

    const descChangeHandler=(e)=>{
        setInputDesc(e.target.value)
    }

    const timeChangeHandler=(e)=>{

        setInputTime(e.target.value)
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault()
        const newLog={
            date: new Date(inputDate),
            desc:inputDesc,
            time:inputTime
        }
        props.onSaveLog(newLog)
        //清空表单
        setInputDesc('')
        setInputDate('')
        setInputTime('')
    }
    return (
        <Card className='logs-form'>
            <form onSubmit={formSubmitHandler}>
                <div className={'form-item'}>
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} value={inputDate} id='date' type="date"/>
                </div>
                <div className={'form-item'}>
                    <label htmlFor="content">内容</label>
                    <input onChange={descChangeHandler} value={inputDesc} id='desc' type="text"/>
                </div>
                <div className={'form-item'}>
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} value={inputTime} id='time' type="number"/>
                    {/*//只能写数字*/}
                </div>
                <div className={'form-btn'}>
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;