import React from 'react';
import styles from './Header.module.scss'

const Header = (props) => {
    return (
        <header>
            <div className={styles.logo}>
                <img src="./img/logo.svg" alt="logo pizza-store"/>
                <div>
                    <h3>pizza store</h3>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className={styles.cart}>
                <button>
                    <span className={styles.cartPrice}>1700 тг</span>
                    <span className={styles.cartCount}>
                        <img src="./img/cart-icon.svg" alt="cart"/>
                        3
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;