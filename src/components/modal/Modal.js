import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import foodDishes from '../Home/Data';
import Modaltem from './Modaltem';

function Modal(props) {
    const items = foodDishes.map((product) => {
        return <Modaltem product={product} />
    })

    return ReactDOM.createPortal(
        <>
            <div className={styles.OVERLAY} ></div >
            <div className={styles.modal}>
                <h2 className={styles.title}>Your Cart</h2>
                {items}
                <button onClick={props.toggleModal} className={styles.closeButton}>Close </button>
            </div >

        </>, document.getElementById('portal')
    );
}

export default Modal;
