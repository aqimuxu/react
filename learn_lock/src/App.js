import React from 'react'
import Logs from "./Components/Logs/Logs";
import Card from "./Components/UI/Card/card";
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css'
/*
* 类组件必须要继承React。Component
* */
const App=()=>{
    return <div className={'app'}>
        <LogsForm/>
        <Logs/>
    </div>
}
export default App;