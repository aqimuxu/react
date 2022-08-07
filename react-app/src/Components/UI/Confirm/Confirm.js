import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import classes from './Confirm.module.css'
const Confirm = (props) => {
    return (
        <Backdrop className={classes.ConfirmOuter}>
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText}>{props.confirmText}</p>
                <div>
                    <button onClick={()=>props.onOk()} className={classes.Cancel}>确认</button>
                    <button onClick={(e)=>props.onCancel(e)} className={classes.Ok}>取消</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;