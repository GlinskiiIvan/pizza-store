import React, {useContext, useEffect, useState} from 'react';
import styles from './PizzaList.module.scss'
import PizzaCard from "./PizzaCard/PizzaCard";
import {StoreContext} from "../../context/StoreContext";

const PizzaList = (props) => {
    const [storeState, storeDispatch] = useContext(StoreContext);

    const [pizzas, setPizzas] = useState([]);

    const sort = storeState.activeSorting.replace('-', '');
    const order = storeState.activeSorting.includes('-') ? 'asc' : 'desc';
    const sortBy = `sortBy=${sort}&order=${order}`;

    const filter = storeState.activeCategory === 'Все' ? '' : `filter=${storeState.activeCategory}`;

    useEffect(() => {
        fetch(`https://62e8efe1249bb1284eb6be90.mockapi.io/pizzas?${sortBy}&${filter}`)
            .then((data) => data.json())
            .then((json) => setPizzas(json))
    }, [storeState.activeSorting, storeState.activeCategory])

    if(!pizzas) return;

    return (
        <div className={styles.wrapper}>
            {
                pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} data={pizza} />
                ))
            }
        </div>
    );
};

export default PizzaList;

