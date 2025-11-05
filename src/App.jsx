import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import Cart from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className={styles.app}>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    titulo={"BIENVENIDOS A VOILÁ ACCESORIOS"}
                  />
                }
              />
              <Route
                path="/category/:category"
                element={
                  <ItemListContainer
                    titulo={"BIENVENIDOS A VOILÁ ACCESORIOS"}
                  />
                }
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart/>}/>
              <Route path="/admin" element={<ProductFormContainer />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
