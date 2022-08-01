import React from 'react';
import styles from './PizzaCard.module.scss'

const PizzaCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src="./img/pizza-0.png" alt="pizza"/>
            <h4>Чизбургер-пицца</h4>
            <div className={styles.options}>
                <ul className={styles.dough}>
                    <li className={styles.active}>тонкое</li>
                    <li>традиционное</li>
                </ul>
                <ul className={styles.size}>
                    <li>26 см.</li>
                    <li className={styles.active}>30 см.</li>
                    <li>40 см.</li>
                </ul>
            </div>
            <div className={styles.buy}>
                <span>1640 тг</span>
                <button>+ Купить <span>2</span></button>
            </div>
        </div>
    );
};

export default PizzaCard;