import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sorting from "./components/Sorting/Sorting";

function App() {
  return (
    <div className={styles.container}>
      <Header />
        <div className={styles.options}>
            <Categories />
            <Sorting />
        </div>
    </div>
  );
}

export default App;
