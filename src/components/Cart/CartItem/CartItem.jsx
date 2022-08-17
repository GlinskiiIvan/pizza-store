import React from 'react';
import styles from './CartItem.module.scss'
import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../../../redux/slices/cartSlice";

const CartItem = (props) => {
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(addItem(props.data));
    }
    const removeItemHandler = () => {
        dispatch(minusItem(props.data));
    }
    const clearItemHandler = () => {
        dispatch(removeItem(props.data))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <img src={props.data.imageUrl} />
                <div>
                    <h4>{props.data.title}</h4>
                    <p>{props.data.type} тесто, {props.data.size} см.</p>
                </div>
            </div>

            <div className={styles.actions}>
                <div className={styles.counts}>
                    <button onClick={addItemHandler} className={`${styles.btn} ${styles.btnCircle}`}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path>
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                        </svg>
                    </button>
                    <span>{props.data.quantity}</span>
                    <button onClick={removeItemHandler} className={`${styles.btn} ${styles.btnCircle} ${props.data.quantity === 1 ? styles.btnDisabled : ''}`}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                        </svg>
                    </button>
                </div>
                <span className={styles.price}>{props.data.totalPrice} тг</span>
                <button onClick={clearItemHandler} className={`${styles.remove} ${styles.btn} ${styles.btnCircle}`}>X</button>
            </div>

        </div>
    );
};

export default CartItem;