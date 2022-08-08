import React, {useEffect, useRef, useState} from 'react';

import qs from "qs";

import PizzaCard from "./PizzaCard/PizzaCard";
import Pagination from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'

import styles from './PizzaList.module.scss'
import {sorting} from "../Sorting/Sorting";
import {setFilters} from "../../redux/slices/filterSlice";

const PizzaList = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const activeCategory = useSelector(state => state.filter.activeCategory);
    const activeSorting = useSelector(state => state.filter.activeSorting.sortType);
    const searchValue = useSelector(state => state.filter.searchValue);
    const activePage = useSelector(state => state.filter.activePage);

    const [pizzas, setPizzas] = useState([]);

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const sort = activeSorting.replace('-', '');
    const order = activeSorting.includes('-') ? 'asc' : 'desc';

    const category = activeCategory === 'Все' ? '' : `category=${activeCategory}`;

    const search = searchValue !== '' ? `title=${searchValue}` : '';

    const fetchPizzas = () => {
        fetch(`https://62e8efe1249bb1284eb6be90.mockapi.io/pizzas?page=${activePage}&limit=4&sortBy=${sort}&order=${order}&${category}&${search}`)
            .then((data) => data.json())
            .then((json) => setPizzas(json))
    }

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sorting.find((obj) => obj.sortType === params.activeSorting);

            dispatch(setFilters({...params, activeSorting: sort}));

            isSearch.current = true;

            console.log('params', {...params, activeSorting: sort})
        }
    }, [])

    useEffect(() => {
        if(!isSearch.current) {
            fetchPizzas();
        }

        isSearch.current = false;
    }, [activeSorting, activeCategory, searchValue, activePage])

    useEffect(() => {
        if(isMounted.current) {
            const queryString = qs.stringify({
                activePage,
                activeCategory,
                activeSorting,
                searchValue,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
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

