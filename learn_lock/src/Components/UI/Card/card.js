import React from 'react';
import './card.css'
const Card = (props) => {

    return <div className={`card ${props.className}`}>{props.children}</div> //child小写 //${}要写在飘飘字符串里面
}



export default Card;