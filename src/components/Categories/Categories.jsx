import React from 'react';
import styles from './Categories.module.scss'

const Categories = (props) => {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <ul className={styles.wrapper}>
            {
                categories.map((item) => <li key={item} className={`${styles.item}`}>{item}</li>)
            }
        </ul>
    );
};

export default Categories;