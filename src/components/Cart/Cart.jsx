import React from 'react';
import styles from './Cart.module.scss'
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.cart}>
                <div className={styles.header}>
                    <div>
                        <img src="./img/cart-icon-1.svg" alt="cart" className={styles.cartIcon}/>
                        <h2>Корзина</h2>
                    </div>
                    <button className={styles.btn}>
                        <img src="./img/trashcan.svg" alt="trashcan" className={styles.trashcanIcon}/>
                        <p>Очистить корзину</p>
                    </button>
                </div>
                <div className={styles.cartList}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className={styles.info}>
                    <p>Всего пицц: <span>3 шт.</span></p>
                    <p>Сумма заказа: <span>900 ₽</span></p>
                </div>
                <div className={styles.actions}>
                    <button className={styles.btn}>
                        <img src="./img/arrow-left.svg" alt="back"/>
                        <p>Вернуться назад</p>
                    </button>
                    <button className={`${styles.btn} ${styles.btnBuy}`}>Оплатить сейчас</button>
                </div>
            </div>

            {/*<div className={styles.cartEmpty}>
                <h2>Корзина пустая 😕</h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src="./img/empty-cart.svg" alt="cart is empty"/>
                <button>Вернуться назад</button>
            </div>*/}

        </div>
    );
};

export default Cart;