import React from 'react';
import {useState} from "react";
import './App.css'
const App = () => {
    const [redBorder,setRedBorder]=useState(false)
    // const pStyle={color:'red',
    //     border:redBorder?'red solid 1px':'blue solid 1px',
    //     backgroundColor:'#bfa',
    // }
    const changeHandler=()=>{
        setRedBorder(true)
    }
    return (
        <div>
            <p className={`p1 ${redBorder?'':'blueBorder'}`}>我是段落</p>
            <button onClick={changeHandler}>点我</button>
        </div>
    );
};

export default App;