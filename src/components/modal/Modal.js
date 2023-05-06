import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import foodDishes from '../Home/Data';
import Modaltem from './Modaltem';
import CartContext from '../context';

function Modal(props) {
    const ctx = useContext(CartContext);
    const ItemArray = ctx.items;
    let totalPrice = 0;

    // Logic for cart items 
    const items = foodDishes.map((product) => {
        const freq = ItemArray[product.id];
        if (freq) {
            totalPrice += freq * product.price;
            return <Modaltem product={product} frequency={freq} />
        } else {
            return null;
        }
    })

    return ReactDOM.createPortal(
        <>
            <div className={styles.OVERLAY} ></div >
            <div className={styles.modal}>
                <h2 className={styles.title}>Your Cart</h2>
                {items}
                <div className={styles.totalContainer}>
                    <div>Total : </div>
                    <div>$ {totalPrice.toFixed(2)}</div>
                </div>
                <>
                    <button onClick={props.toggleModal} className={styles.closeButton}>Close </button>
                    {totalPrice !== 0 && <button onClick={props.toggleModal} className={styles.closeButton}> Order </button>}
                </>
            </div >

        </>, document.getElementById('portal')
    );
}

export default Modal;
