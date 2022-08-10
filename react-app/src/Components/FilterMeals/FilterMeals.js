import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FIlterMeals.module.css'


const FilterMeals = (props) => {
    const [keyword,setKeyword]=useState('')
    useEffect(()=>{
        //一次输入完成才开始过滤
        timer = setTimeout(()=>{
            props.onFilter(keyword)
        },1000)
        //effect清理函数
        return ()=>{
            clearTimeout(timer)
        }
    },[keyword])

    const inputChangeHandler=e=>{
        const keyword=e.target.value.trim();
        setKeyword(keyword);
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input onChange={inputChangeHandler} className={classes.SearchInput} type="text" placeholder={'请输入关键字'}/>
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}/>
            </div>
        </div>
    );
};

export default FilterMeals;