import React, {useState} from 'react';
import styles from './PizzaCard.module.scss'

const PizzaCard = (props) => {
    const [activeDough, setActiveDough] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const changeDoughHandler = (index) => {
        setActiveDough(index);
    }
    const changeSizeHandler = (index) => {
        setActiveSize(index);
    }

    return (
        <div className={styles.wrapper}>
            <img src={props.data.imageUrl} alt="pizza"/>
            <h4>{props.data.title}</h4>
            <div className={styles.options}>
                <ul className={styles.dough}>
                    {
                        props.data.types.map((item, index) => (
                            <li
                                key={item}
                                className={`${activeDough == index ? styles.active : ''}`}
                                onClick={() => changeDoughHandler(index)}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <ul className={styles.size}>
                    {
                        props.data.sizes.map((item, index) => (
                            <li
                                key={item}
                                className={`${activeSize == index ? styles.active : ''}`}
                                onClick={() => changeSizeHandler(index)}
                            >
                                {item} см.
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.buy}>
                <span>{props.data.prices[activeSize]} тг</span>
                <button>+ Купить <span>0</span></button>
            </div>
        </div>
    );
};

export default PizzaCard;