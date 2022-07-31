import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className={styles.container}>
      <Header />
        <div>
            <Categories />
        </div>
    </div>
  );
}

export default App;
