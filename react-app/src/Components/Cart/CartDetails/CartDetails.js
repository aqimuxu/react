import React,{useContext} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../Store/cart-context";
import Meal from "../../Meals/Meal/Meal";

const CartDetails = () => {
    const ctx=useContext(CartContext)
    return (
        <Backdrop>
            <div
                className={classes.CartDetails}
                onClick={event => event.stopPropagation()}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>商品详情</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        ctx.items.map(item=>
                            <Meal key={item.id} meal={item} noDesc/>
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;