import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

function Modal(props) {

    return ReactDOM.createPortal(
        <>
            <div className={styles.OVERLAY} ></div >
            <div className={styles.modal}>
                <h2 className={styles.title}>Your Cart</h2>
                <ul className={styles.list}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <button onClick={props.toggleModal} className={styles.closeButton}>Close </button>
            </div>

        </>, document.getElementById('portal')
    );
}

export default Modal;
