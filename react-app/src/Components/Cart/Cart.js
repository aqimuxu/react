import React, {useContext, useState} from 'react';
import classes from "./Cart.module.css";
import iconImg from '../../asset/bag.png';
import CartContext from "../../Store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
const Cart = () => {
    const ctx=useContext(CartContext)
    const [showDetails,setShowDetails]=useState(false)
    //结账页的显示
    const [showCheckout,setShowCheckout]=useState(false)
    const toggleDetailsHandler=()=>{
        if(ctx.totalAmount===0) {
            setShowDetails(false)
            return;
        };
        setShowDetails(prevState => !prevState)
    }
    const showCheckoutHandler=()=>{
        if(ctx.totalAmount===0) return;
        setShowCheckout(true)
    }
    const hideCheckoutHandler=()=>{
        setShowCheckout(false)
    }
    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {/*结账*/}
            {showCheckout&&<Checkout onHide={hideCheckoutHandler}/>}
            {/*引入购物车详情*/}
            {showDetails && <CartDetails/>}
            <div className={classes.Icon} >
                <img src={iconImg} alt=""/>
                {ctx.totalAmount===0?null:<span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalPrice===0?<p className={classes.NoMeal}>未选择商品</p>:<p className={classes.Price}>{ctx.totalPrice}</p>}

            <button onClick={showCheckoutHandler} className={`${classes.Button} ${ctx.totalAmount===0?classes.Disable:''}`}>去结算</button>
        </div>
    );
};

export default Cart;