import React, {useContext, useState} from 'react';
import styles from './Categories.module.scss'
import {StoreContext} from "../../context/StoreContext";

const Categories = (props) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [storeState, storeDispatch] = useContext(StoreContext);

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const setCategoryHandler = (index) => {
        setActiveCategory(index);
        storeDispatch({type: 'CHANGE_CATEGORY', newCategory: categories[index]})
    }

    return (
        <ul className={styles.wrapper}>
            {
                categories.map((item, index) => (
                    <li
                        key={item}
                        className={`${styles.item} ${activeCategory == index ? styles.active : ''}`}
                        onClick={() => setCategoryHandler(index)}
                    >
                        {item}
                    </li>
                ))
            }
        </ul>
    );
};

export default Categories;