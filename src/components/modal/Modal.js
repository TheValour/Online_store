import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Modaltem from './Modaltem';
import CartContext from '../context';
import Order from './Order';

function Modal(props) {
    const [order, setOrder] = useState(false);
    const ctx = useContext(CartContext);
    const ItemArray = ctx.items;
    const backEnd = []

    let totalPrice = 0;
    // Logic for cart items 
    const items = props.meals.map((product) => {
        const freq = ItemArray[product.id];
        if (freq) {
            backEnd.push((
                {
                    name: product.name,
                    price: product.price,
                    frequency: freq
                }
            ))
            totalPrice += freq * product.price;
            return <Modaltem product={product} frequency={freq} key={product.key} />
        } else {
            return null;
        }
    })

    async function submitOrderHandler(userData) {
        await fetch('https://http-request-da0ed-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: backEnd
            })
        });
        props.meals.forEach((product, index) => {
            const freq = ItemArray[product.id];
            if (freq) {
                ctx.setItems(product.id, -freq);
                ctx.setNoCart(pre => pre - freq);
            }
        })
    }

    return ReactDOM.createPortal(
        <>
            <div className={styles.OVERLAY} ></div >
            <div className={styles.modal}>
                <h2 className={styles.title}>Your Cart</h2>
                {items} {/* -------------adding  order List------------------ */}
                <div className={styles.totalContainer}>
                    <div>Total : </div>
                    <div>&#8377; {totalPrice.toFixed(2)}</div>
                </div>
                <>
                    <button onClick={props.toggleModal} className={styles.closeButton}>Close </button>
                    {totalPrice !== 0 && <button onClick={() => setOrder(true)} className={styles.closeButton}> Order </button>}
                </>
                {order && <Order onCancel={() => setOrder(false)} submitOrderHandler={submitOrderHandler} />}
            </div >

        </>, document.getElementById('portal')
    );
}

export default Modal;
