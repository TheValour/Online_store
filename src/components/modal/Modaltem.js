import React from 'react';
import style from './ModaItem.module.css';

export default function Modaltem({ product, frequency }) {
    return (
        <div className={style.modalItem}>
            <div>
                {product.name}<br />
                <div className={style.price}>$ {product.price}</div>
            </div>
            <div className={style.frequencyContainer}>{+frequency}</div>
        </div>
    );
}
