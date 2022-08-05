import React, {useState} from 'react';
import styles from './Pagination.module.scss'

const Pagination = (props) => {
    const [activePage, setActivePage] = useState(0)
    const pages = [1, 2, 3];

    return (
        <ul className={styles.wrapper}>
            <li>&#8249;</li>
            {
                pages.map((page, index) => (
                    <li
                        className={activePage === index ? styles.active : ''}
                        onClick={() => setActivePage(index)}
                    >
                        {page}
                    </li>
                ))
            }
            <li>&#8250;</li>
        </ul>
    );
};

export default Pagination;