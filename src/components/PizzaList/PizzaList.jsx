import React, {useEffect, useState} from 'react';
import styles from './PizzaList.module.scss'
import PizzaCard from "./PizzaCard/PizzaCard";

const PizzaList = (props) => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch(`https://62e8efe1249bb1284eb6be90.mockapi.io/pizzas`)
            .then((data) => data.json())
            .then((json) => setPizzas(json))
    }, [])

    if(!pizzas) return;

    return (
        <div className={styles.wrapper}>
            {
                pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} data={pizza} />
                ))
            }
        </div>
    );
};

export default PizzaList;

