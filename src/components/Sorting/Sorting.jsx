import React from 'react';
import styles from './Sorting.module.scss'

const Sorting = (props) => {
    const sorting = [
        'Названию (ASC)',
        'Названию (DESC)',
        'Цене (ASC)',
        'Цене (DESC)',
    ]

    return (
        <div className={styles.wrapper}>
            <b>Сортировка по:</b>
            <p>Названию &#708;</p>
            <div className={`${styles.options} ${styles.active}`}>
                <ul>
                    {
                        sorting.map((item) => <li key={item} className={``} >{item}</li>)
                    }
                    {/*<li className={styles.active}>Названию &#708;</li>
                    <li>Названию &#709;</li>
                    <li>Цене &#708;</li>
                    <li>Цене &#709;</li>*/}
                </ul>
            </div>
        </div>
    );
};

export default Sorting;