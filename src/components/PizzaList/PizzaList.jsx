import React, {useEffect, useRef, useState} from 'react';

import qs from "qs";

import PizzaCard from "./PizzaCard/PizzaCard";
import Pagination from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'

import {sorting} from "../Sorting/Sorting";
import {setFilters} from "../../redux/slices/filterSlice";
import {fetchPizzas} from "../../redux/slices/pizzasSlice";
import {ERROR} from "../../constants";

import styles from './PizzaList.module.scss'

const PizzaList = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);
    const activeCategory = filter.activeCategory;
    const activeSorting = filter.activeSorting.sortType;
    const searchValue = filter.searchValue;
    const activePage = filter.activePage;

    const {items, status} = useSelector(state => state.pizzas);

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const getPizzas = async () => {
        const sort = activeSorting.replace('-', '');
        const order = activeSorting.includes('-') ? 'asc' : 'desc';
        const category = activeCategory === 'Все' ? '' : `category=${activeCategory}`;
        const search = searchValue !== '' ? `title=${searchValue}` : '';

        dispatch(fetchPizzas({sort, order, category, search, activePage}));
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
        getPizzas();
        if(!isSearch.current) {
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

    if(!items) return;

    return (
        <React.Fragment>
            {
                status === ERROR ? (
                    <div className={styles.pizzasError}>
                        <h2>Ошибка 😕</h2>
                        <p>
                            При получении пицц произошла ошибка. Нам очень жаль за предоставленные неудобства( Повторите попытку позже.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className={styles.title}>{activeCategory} пиццы</h2>
                        <div className={styles.wrapper}>
                            {
                                items.map((pizza) => (
                                    <PizzaCard key={pizza.id} data={pizza} />
                                ))
                            }
                        </div>
                        <Pagination />
                    </div>
                )
            }

        </React.Fragment>
    );
};

export default PizzaList;

