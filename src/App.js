import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sorting from "./components/Sorting/Sorting";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className={styles.container}>
        <Header />
        <MainPage />
    </div>
  );
}

export default App;
