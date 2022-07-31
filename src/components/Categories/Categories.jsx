import React from 'react';
import styles from './Categories.module.scss'

const Categories = (props) => {
    return (
        <ul className={styles.wrapper}>
            <li className={`${styles.item} ${styles.active}`}>Все</li>
            <li className={styles.item}>Мясные</li>
            <li className={styles.item}>Вегетарианские</li>
            <li className={styles.item}>Гриль</li>
            <li className={styles.item}>Острые</li>
            <li className={styles.item}>Закрытые</li>
        </ul>
    );
};

export default Categories;