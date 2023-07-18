import React, { useContext, useState } from 'react'
import style from './CartButton.module.css'
import CartContext from '../context'
import Modal from '../modal/Modal';

export default function CartButton({ meals }) {
    const ctx = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            {isOpen && <Modal toggleModal={toggleModal} meals={meals} />}

            <div className={style.cartButton} onClick={toggleModal}>
                Your Card
                <div className={style.circle}>{ctx.totalCart}</div>
            </div>
        </>
    )
}
