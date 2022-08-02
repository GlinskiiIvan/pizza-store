import React from 'react';
import styles from './Sorting.module.scss'

const Sorting = (props) => {
    return (
        <div className={styles.wrapper}>
            <b>Сортировка по:</b>
            <p>Названию &#708;</p>
            {/*<div className={`${styles.options} ${styles.active}`}>
                <ul>
                    <li className={styles.active}>Названию &#708;</li>
                    <li>Названию &#709;</li>
                    <li>Цене &#708;</li>
                    <li>Цене &#709;</li>
                </ul>
            </div>*/}
        </div>
    );
};

export default Sorting;