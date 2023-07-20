import React, { useState, useContext } from 'react'
import styles from './ItemContainer.module.css';
import CartContext from '../context';


export default function Item({ product }) {
    const [items, setItems] = useState(1);
    const ctx = useContext(CartContext);

    const onChangeHandler = (event, productId) => {
        setItems(event.target.value);
    };

    function addTocart(productId) {
        ctx.setNoCart(pre => pre + Number(items));
        ctx.setItems(productId, items);
        console.log(productId);
    }
    return (
        <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>&#8377; {product.price}</p>
                <button className={styles.button} onClick={() => addTocart(product.id)}>
                    Add to Cart
                </button>
                <input
                    type="number"
                    onChange={onChangeHandler}
                    className={styles.input}
                    placeholder='1'
                    min={0}
                />
            </div>
        </div>
    )
}
