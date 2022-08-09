import React, {useState} from 'react';
import styles from './PizzaCard.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../../redux/slices/cartSlice";

const PizzaCard = (props) => {
    const dispatch = useDispatch();
    const stateCart = useSelector(state => state.cart);

    const items = stateCart.items;

    const [activeDough, setActiveDough] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const changeDoughHandler = (index) => {
        setActiveDough(index);
    }
    const changeSizeHandler = (index) => {
        setActiveSize(index);
    }

    const addItemHandler = () => {
        const item = {
            id: props.data.id,
            imageUrl: props.data.imageUrl,
            title: props.data.title,
            type: props.data.types[activeDough],
            size: props.data.sizes[activeSize],
            price: props.data.prices[activeSize]
        };

        dispatch(addItem(item));
    }

    const getQuantityPizzas = () => {
        return items.filter((obj) => obj.id === props.data.id).reduce((quantity, obj) => obj.quantity + quantity, 0);
    }

    return (
        <div className={styles.wrapper}>
            <img src={props.data.imageUrl} alt="pizza"/>
            <h4>{props.data.title}</h4>
            <div className={styles.options}>
                <ul className={styles.dough}>
                    {
                        props.data.types.map((item, index) => (
                            <li
                                key={item}
                                className={`${activeDough == index ? styles.active : ''}`}
                                onClick={() => changeDoughHandler(index)}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <ul className={styles.size}>
                    {
                        props.data.sizes.map((item, index) => (
                            <li
                                key={item}
                                className={`${activeSize == index ? styles.active : ''}`}
                                onClick={() => changeSizeHandler(index)}
                            >
                                {item} см.
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.buy}>
                <span>{props.data.prices[activeSize]} тг</span>
                <button onClick={addItemHandler}>+ Купить {getQuantityPizzas() > 0 && (<span>{getQuantityPizzas()}</span>)}</button>
            </div>
        </div>
    );
};

export default PizzaCard;