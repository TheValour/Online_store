import React from 'react';
import styles from './Navbar.module.css';
import CartButton from './CartButton';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.search}>
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </div>
            <h2>Foodee</h2>
            <CartButton />
        </nav >
    );
}

export default Navbar;
