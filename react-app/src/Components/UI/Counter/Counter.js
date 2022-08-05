import React from 'react';
import classes from "./Counter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
/*
* 引入fontawesome，安装依赖
* npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

* */

const Counter = (props) => {
    const addButtonHandler=()=>{
        props.onAdd(props.meal)
    }
    const subBottonHandler=()=>{
        props.onSub(props.meal)
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount&& props.meal.amount!==0)?(
                    <>
                        <button onClick={subBottonHandler} className={classes.Sub}>
                            <FontAwesomeIcon icon={faMinus}/>
                        </button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                    ):null
            }


            <button onClick={addButtonHandler} className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
};

export default Counter;