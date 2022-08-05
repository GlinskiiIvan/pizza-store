import React, {useContext, useState} from 'react';
import styles from './Pagination.module.scss'
import {StoreContext} from "../../context/StoreContext";

const Pagination = (props) => {
    const [storeState, storeDispatch] = useContext(StoreContext);

    const [activePage, setActivePage] = useState(0)
    const pages = [1, 2, 3];

    const changePaheHandler = (index) => {
        setActivePage(index);
        storeDispatch({type: 'CHANGE_PAGE', newPage: pages[index]})
    }
    const backPageHandler = () => {
        if (activePage > 0) {
            setActivePage(activePage -1);
            storeDispatch({type: 'CHANGE_PAGE', newPage: pages[activePage - 1]})
        }
    }
    const nextPageHandler = () => {
        if (activePage < 2) {
            setActivePage(activePage + 1);
            storeDispatch({type: 'CHANGE_PAGE', newPage:  pages[activePage + 1]})
        }
    }

    return (
        <ul className={styles.wrapper}>
            <li className={activePage < 1 ? styles.disabled : ''} onClick={backPageHandler}>&#8249;</li>
            {
                pages.map((page, index) => (
                    <li
                        key={page}
                        className={activePage === index ? styles.active : ''}
                        onClick={() => changePaheHandler(index)}
                    >
                        {page}
                    </li>
                ))
            }
            <li className={activePage > 1 ? styles.disabled : ''} onClick={nextPageHandler}>&#8250;</li>
        </ul>
    );
};

export default Pagination;