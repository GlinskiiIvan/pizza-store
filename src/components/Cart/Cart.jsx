import React from 'react';
import styles from './Cart.module.scss'
import CartItem from "./CartItem/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {clearItems} from "../../redux/slices/cartSlice";
import {useNavigate} from "react-router-dom";
import PizzaCard from "../PizzaList/PizzaCard/PizzaCard";

const Cart = (props) => {
    const dispatch = useDispatch();
    const stateCart = useSelector(state => state.cart);

    const totalQuantity = stateCart.totalQuantity;
    const totalPrice = stateCart.totalPrice;
    const items = stateCart.items;

    const navigate = useNavigate();

    const clearCartHandler = () => {
        dispatch(clearItems());
    }

    const onBackHandler = () => {
        navigate('/');
    }

    return (
        <div className={styles.wrapper}>

            {
                items.length > 0 && (
                    <div className={styles.cart}>
                        <div className={styles.header}>
                            <div>
                                <img src="./img/cart-icon-1.svg" alt="cart" className={styles.cartIcon}/>
                                <h2>Корзина</h2>
                            </div>
                            <button onClick={clearCartHandler} className={styles.btn}>
                                <img src="./img/trashcan.svg" alt="trashcan" className={styles.trashcanIcon}/>
                                <p>Очистить корзину</p>
                            </button>
                        </div>
                        <div className={styles.cartList}>
                            {
                                items.map((item) => (
                                    <CartItem key={`${item.id}/${item.type}/${item.size}`} data={item} />
                                ))
                            }
                        </div>
                        <div className={styles.info}>
                            <p>Всего пицц: <span>{totalQuantity} шт.</span></p>
                            <p>Сумма заказа: <span>{totalPrice} Тг.</span></p>
                        </div>
                        <div className={styles.actions}>
                            <button onClick={onBackHandler} className={styles.btn}>
                                <img src="./img/arrow-left.svg" alt="back"/>
                                <p>Вернуться назад</p>
                            </button>
                            <button className={`${styles.btn} ${styles.btnBuy}`}>Оплатить сейчас</button>
                        </div>
                    </div>
                )
            }

            {
                items.length === 0 && (
                    <div className={styles.cartEmpty}>
                        <h2>Корзина пустая 😕</h2>
                        <p>
                            Вероятней всего, вы не заказывали ещё пиццу.
                            Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <img src="./img/empty-cart.svg" alt="cart is empty"/>
                        <button onClick={onBackHandler}>Вернуться назад</button>
                    </div>
                )
            }

        </div>
    );
};

export default Cart;