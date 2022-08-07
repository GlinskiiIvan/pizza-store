import React, {useContext, useState} from 'react';
import {StoreContext} from "../../context/StoreContext";
import styles from './Sorting.module.scss'

const Sorting = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeSorting, setActiveSorting] = useState(0);
    const [storeState, storeDispatch] = useContext(StoreContext);

    const sorting = [
        {sortType: 'title', value: 'Названию 👇'},
        {sortType: '-title', value: 'Названию 👆'},
        {sortType: 'prices', value: 'Цене 👇'},
        {sortType: '-prices', value: 'Цене 👆'},
    ]

    const toggleShowModalHandler = () => {
        setShowModal(!showModal);
    }

    const changeSortingHandler = (index) => {
        setActiveSorting(index);
        toggleShowModalHandler();
        storeDispatch({type: 'CHANGE_SORT_TYPE', newSortType: sorting[index].sortType})
    }

    return (
        <div className={styles.wrapper}>
            <b>Сортировка по:</b>
            <p onClick={toggleShowModalHandler}>{sorting[activeSorting].value}</p>
            {
                showModal && (
                    <div className={`${styles.options} ${styles.active}`}>
                        <ul>
                            {
                                sorting.map((item, index) => (
                                    <li
                                        key={item.value}
                                        className={`${activeSorting === index ? styles.active : ''}`}
                                        onClick={() => changeSortingHandler(index)}>
                                        {item.value}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default Sorting;