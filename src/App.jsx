import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import Cart from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoutes from './components/ProtetedRoutes/ProtectedRoutes';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className={styles.app}>
            <Routes>
              <Route element={<MainLayout />}>
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
                <Route path="/carrito" element={<Cart />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login/>} />
                <Route path="products-entry" element={
                  <ProtectedRoutes>
                    <ProductFormContainer />
                  </ProtectedRoutes>
                } />
              </Route>
              {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
