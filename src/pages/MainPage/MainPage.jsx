import React from 'react';
import styles from './MainPage.module.scss'
import Categories from "../../components/Categories/Categories";
import Sorting from "../../components/Sorting/Sorting";
import PizzaList from "../../components/PizzaList/PizzaList";

const MainPage = (props) => {
    return (
        <div>
            {/*<div className={styles.options}>
                <Categories />
                <Sorting />
            </div>*/}
            <h2 className={styles.title}>Все пиццы</h2>
            <PizzaList />
        </div>
    );
};

export default MainPage;