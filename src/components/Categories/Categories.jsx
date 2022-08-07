import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory} from "../../redux/slices/filterSlice";

import styles from './Categories.module.scss'

const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
]

const Categories = (props) => {
    const dispatch = useDispatch();
    const activeCategory = useSelector(state => state.filter.activeCategory);

    const setCategoryHandler = (item) => {
        dispatch(setActiveCategory(item));
    }

    return (
        <ul className={styles.wrapper}>
            {
                categories.map((item, index) => (
                    <li
                        key={item}
                        className={`${styles.item} ${activeCategory === item ? styles.active : ''}`}
                        onClick={() => setCategoryHandler(item)}
                    >
                        {item}
                    </li>
                ))
            }
        </ul>
    );
};

export default Categories;