import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sorting from "./components/Sorting/Sorting";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <div className={styles.container}>
        <Header />
        {/*<MainPage />*/}
        <CartPage />
    </div>
  );
}

export default App;
