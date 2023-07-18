import React from 'react';
import styles from './Navbar.module.css';
import CartButton from './CartButton';

function Navbar({ meals }) {
    return (
        <nav className={styles.navbar}>
            <h2>#FOODEE</h2>
            <CartButton meals={meals} />
        </nav >
    );
}

export default Navbar;
