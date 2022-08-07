import React, {useContext, useEffect, useState} from 'react';
import styles from './PizzaList.module.scss'
import PizzaCard from "./PizzaCard/PizzaCard";
import {StoreContext} from "../../context/StoreContext";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";

const PizzaList = (props) => {
    const activeCategory = useSelector(state => state.filter.activeCategory);
    const activeSorting = useSelector(state => state.filter.activeSorting.sortType);
    const searchValue = useSelector(state => state.filter.searchValue);
    const activePage = useSelector(state => state.filter.activePage);

    const [pizzas, setPizzas] = useState([]);

    const sort = activeSorting.replace('-', '');
    const order = activeSorting.includes('-') ? 'asc' : 'desc';
    const sortBy = `sortBy=${sort}&order=${order}`;

    const filter = activeCategory === 'Все' ? '' : `filter=${activeCategory}`;

    const search = searchValue !== '' ? `title=${searchValue}` : '';

    const page = `page=${activePage}&limit=4`;

    useEffect(() => {
        fetch(`https://62e8efe1249bb1284eb6be90.mockapi.io/pizzas?${search}&${sortBy}&${filter}&${page}`)
            .then((data) => data.json())
            .then((json) => setPizzas(json))
    }, [activeSorting, activeCategory, searchValue, activePage])

    if(!pizzas) return;

    return (
        <React.Fragment>
            <h2 className={styles.title}>{activeCategory} пиццы</h2>
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

