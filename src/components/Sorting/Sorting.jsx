import styles from './Sorting.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {setActiveSorting} from "../../redux/slices/filterSlice";

export const sorting = [
    {sortType: 'title', value: 'Названию 👇'},
    {sortType: '-title', value: 'Названию 👆'},
    {sortType: 'prices', value: 'Цене 👇'},
    {sortType: '-prices', value: 'Цене 👆'},
]

const Sorting = () => {
    const dispatch = useDispatch();
    const activeSorting = useSelector(state => state.filter.activeSorting);

    const sortRef = useRef();

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const clickOutsideHandle = (event) => {
            if(!event.path.includes(sortRef.current)) {
                setShowModal(false);
            }
        };

        document.querySelector('body').addEventListener('click', clickOutsideHandle)

        return () => {
            document.querySelector('body').removeEventListener('click', clickOutsideHandle)
        }
    }, []);

    const toggleShowModalHandler = () => {
        setShowModal(!showModal);
    }

    const changeSortingHandler = (item) => {
        toggleShowModalHandler();
        dispatch(setActiveSorting(item))
    }

    return (
        <div ref={sortRef} className={styles.wrapper}>
            <b>Сортировка по:</b>
            <p onClick={toggleShowModalHandler}>{activeSorting.value}</p>
            {
                showModal && (
                    <div className={`${styles.options} ${styles.active}`}>
                        <ul>
                            {
                                sorting.map((item) => (
                                    <li
                                        key={item.value}
                                        className={`${activeSorting === item ? styles.active : ''}`}
                                        onClick={() => changeSortingHandler(item)}>
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