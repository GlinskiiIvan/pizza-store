import React from 'react';
import styles from './Sorting.module.scss'

const Sorting = (props) => {
    return (
        <div className={styles.wrapper}>
            <b>Сортировка по:</b>
            <p>Названию &#708;</p>
            <div className={`${styles.options} ${styles.active}`}>
                <ul>
                    <li className={styles.active}>Названию &#708;</li>
                    <li>Названию &#709;</li>
                    <li>Цене &#708;</li>
                    <li>Цене &#709;</li>
                </ul>
            </div>
            {/*<select>
                <option>Названию &#708;</option>
                <option>Названию &#709;</option>
                <option>Цене &#708;</option>
                <option>Цене &#709;</option>
            </select>*/}
        </div>
    );
};

export default Sorting;