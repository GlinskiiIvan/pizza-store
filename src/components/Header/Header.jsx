import React from 'react';
import styles from './Header.module.scss'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Header = (props) => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="./img/logo.svg" alt="logo pizza-store"/>
                <div>
                    <h3>pizza store</h3>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className={styles.cart}>
                <Link to='/cart'>
                    <button>
                        <span className={styles.cartPrice}>{totalPrice} тг</span>
                        <span className={styles.cartCount}>
                        <img src="./img/cart-icon.svg" alt="cart"/>
                            {totalQuantity}
                    </span>
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;