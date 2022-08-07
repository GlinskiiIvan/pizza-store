import styles from './Pagination.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setActivePage} from "../../redux/slices/filterSlice";

const pages = [1, 2, 3];

const Pagination = (props) => {
    const dispatch = useDispatch();
    const activePage = useSelector(state => state.filter.activePage);

    const changePaheHandler = (page) => {
        dispatch(setActivePage(page));
    }
    const backPageHandler = () => {
        if (activePage > 1) {
            dispatch(setActivePage(activePage -1))
        }
    }
    const nextPageHandler = () => {
        if (activePage < 3) {
            dispatch(setActivePage(activePage + 1));
        }
    }

    return (
        <ul className={styles.wrapper}>
            <li className={activePage < 2 ? styles.disabled : ''} onClick={backPageHandler}>&#8249;</li>
            {
                pages.map((page, index) => (
                    <li
                        key={page}
                        className={activePage === page ? styles.active : ''}
                        onClick={() => changePaheHandler(page)}
                    >
                        {page}
                    </li>
                ))
            }
            <li className={activePage > 2 ? styles.disabled : ''} onClick={nextPageHandler}>&#8250;</li>
        </ul>
    );
};

export default Pagination;