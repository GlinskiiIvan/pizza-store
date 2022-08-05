import React, {useContext, useState} from 'react';

import Categories from "../../components/Categories/Categories";
import Sorting from "../../components/Sorting/Sorting";
import PizzaList from "../../components/PizzaList/PizzaList";

import styles from './MainPage.module.scss'
import {StoreContext} from "../../context/StoreContext";

const MainPage = (props) => {
    const [storeState, storeDispatch] = useContext(StoreContext);

    return (
        <div>
            <div>
                <div className={styles.options}>
                    <Categories />
                    <Sorting />
                </div>
                <div className={styles.search}>
                    <svg className="Search_icon__XMmYc" enable-background="new 0 0 32 32" id="EditableLine" version="1.1"
                         viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" stroke-linecap="round"
                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle>
                        <line fill="none" id="XMLID_44_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
                              stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder='Поиск...'
                        value={storeState.searchValue}
                        onChange={(event) => storeDispatch({type: 'SEARCH', newSearchValue: event.target.value})}
                    />
                </div>
            </div>
            <PizzaList />
        </div>
    );
};

export default MainPage;