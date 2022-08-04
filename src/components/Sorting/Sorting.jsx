import React, {useState} from 'react';
import styles from './Sorting.module.scss'

const Sorting = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [activeSorting, setActiveSorting] = useState(0);

    const sorting = [
        'Названию (ASC)',
        'Названию (DESC)',
        'Цене (ASC)',
        'Цене (DESC)',
    ]

    const toggleShowModalHandler = () => {
        setShowModal(!showModal);
    }

    const changeSortingHandler = (index) => {
        setActiveSorting(index);
        toggleShowModalHandler();
    }

    return (
        <div className={styles.wrapper}>
            <b>Сортировка по:</b>
            <p onClick={toggleShowModalHandler}>{sorting[activeSorting]}</p>
            <div className={`${styles.options} ${styles.active}`}>
                {
                    showModal && (
                        <ul>
                            {
                                sorting.map((item, index) => (
                                    <li
                                        key={item}
                                        className={`${activeSorting === index ? styles.active : ''}`}
                                        onClick={() => changeSortingHandler(index)}>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};

export default Sorting;