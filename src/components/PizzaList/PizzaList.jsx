import React, {useContext, useEffect, useState} from 'react';
import styles from './PizzaList.module.scss'
import PizzaCard from "./PizzaCard/PizzaCard";
import {StoreContext} from "../../context/StoreContext";
import Pagination from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";

const PizzaList = (props) => {
    const activeCategory = useSelector(state => state.filter.activeCategory);

    const [storeState, storeDispatch] = useContext(StoreContext);

    const [pizzas, setPizzas] = useState([]);

    const sort = storeState.activeSorting.replace('-', '');
    const order = storeState.activeSorting.includes('-') ? 'asc' : 'desc';
    const sortBy = `sortBy=${sort}&order=${order}`;

    const filter = activeCategory === 'Все' ? '' : `filter=${activeCategory}`;

    const search = storeState.searchValue !== '' ? `title=${storeState.searchValue}` : '';

    const page = `page=${storeState.activePage}&limit=4`;

    useEffect(() => {
        fetch(`https://62e8efe1249bb1284eb6be90.mockapi.io/pizzas?${search}&${sortBy}&${filter}&${page}`)
            .then((data) => data.json())
            .then((json) => setPizzas(json))
    }, [storeState.activeSorting, activeCategory, storeState.searchValue, storeState.activePage])

    if(!pizzas) return;

    return (
        <React.Fragment>
            <h2 className={styles.title}>{storeState.activeCategory} пиццы</h2>
            <div className={styles.wrapper}>
                {
                    pizzas.map((pizza) => (
                        <PizzaCard key={pizza.id} data={pizza} />
                    ))
                }
            </div>
            <Pagination />
        </React.Fragment>
    );
};

export default PizzaList;

