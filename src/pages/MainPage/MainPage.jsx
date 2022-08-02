import React from 'react';

import Categories from "../../components/Categories/Categories";
import Sorting from "../../components/Sorting/Sorting";
import PizzaList from "../../components/PizzaList/PizzaList";

import styles from './MainPage.module.scss'

const MainPage = (props) => {
    return (
        <div>
            <div className={styles.options}>
                <Categories />
                <Sorting />
            </div>
            <h2 className={styles.title}>Все пиццы</h2>
            <PizzaList />
        </div>
    );
};

export default MainPage;