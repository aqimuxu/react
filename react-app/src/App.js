import React, {useState} from 'react';
import classes from './App.module.css'
const App = () => {
    const [showBorder,setShowBorder]=useState(false)
    return (
        <div>
            <p className={`${classes.p1} ${showBorder?classes.border:''}`}>我是段落</p>
            <button onClick={()=>setShowBorder(true)}>点我</button>
        </div>
    );
};

export default App;