import styles from './App.module.scss';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
        <Header />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    </div>
  );
}

export default App;
