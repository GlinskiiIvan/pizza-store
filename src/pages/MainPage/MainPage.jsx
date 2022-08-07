import React from 'react';

import Categories from "../../components/Categories/Categories";
import Sorting from "../../components/Sorting/Sorting";
import PizzaList from "../../components/PizzaList/PizzaList";

import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";

import debounce from 'lodash.debounce';

import styles from './MainPage.module.scss'

const MainPage = (props) => {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState('');

    const updateSearchValue = React.useCallback(
        debounce((event) => {
            dispatch(setSearchValue(event.target.value))
        }, 1000), []
    );
    const changeSearchValueHandler = (event) => {
        setValue(event.target.value);
        updateSearchValue(event);
    }

    return (
        <div>
            <div>
                <div className={styles.options}>
                    <Categories />
                    <Sorting />
                </div>
                <div className={styles.search}>
                    <svg className="Search_icon__XMmYc" enableBackground="new 0 0 32 32" id="EditableLine" version="1.1"
                         viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round"
                                strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></circle>
                        <line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                              strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder='Поиск...'
                        value={value}
                        onChange={(event) => changeSearchValueHandler(event)}
                    />
                </div>
            </div>
            <PizzaList />
        </div>
    );
};

export default MainPage;