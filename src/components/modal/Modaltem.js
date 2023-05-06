import React from 'react';
import style from './ModaItem.module.css';

export default function Modaltem({ product }) {
    return (
        <div className={style.modalItem}>
            {product.name}<br />
            <div className={style.price}>$ {product.price}</div>
        </div>
    );
}
