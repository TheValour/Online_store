import React, { useContext } from 'react';
import style from './ModaItem.module.css';
import CartContext from '../context';

export default function Modaltem({ product, frequency }) {
    const ctx = useContext(CartContext);

    function incrementHandler() {
        ctx.setItems(product.id, 1);
        ctx.setNoCart(pre => pre + 1);
    }
    function decrementHandler() {
        ctx.setItems(product.id, -1);
        ctx.setNoCart(pre => pre - 1);
    }

    return (
        <div className={style.modalItem}>
            <div>
                {product.name}<br />
                <div className={style.price}>&#8377; {product.price}</div>
            </div>
            <div>
                <button className={style.btn} onClick={incrementHandler}>+</button>
                <button className={style.btn} onClick={decrementHandler}>-</button>
            </div>
            <div className={style.frequencyContainer}>{+frequency}</div>
        </div>
    );
}
