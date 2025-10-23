import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //  Verifica si un producto ya existe en el carrito
  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  //  Agregar un producto al carrito
  const addItem = (item) => {
    if (exists(item.id)) {
      // Si el producto ya existe, actualiza su cantidad
      const updatedCart = cart.map((p) => {
        if (p.id === item.id) {
          // Evita mutar el objeto directamente, retorna una copia con la nueva cantidad
          return { ...p, quantity: p.quantity + item.quantity };
        } else {
          return p;
        }
      });
      setCart(updatedCart);
      alert(`${item.name} agregado al carrito`);
    } else {
      // Si no existe, lo agrega al array del carrito
      setCart([...cart, item]);
      alert(`${item.name} agregado al carrito`);
    }
  };

  //  Eliminar un producto del carrito
  const deleteItem = (id) => {
    const filteredCart = cart.filter((p) => p.id !== id);
    setCart(filteredCart);
    alert("Producto eliminado del carrito");
  };

  //  Vaciar completamente el carrito
  const clearCart = () => {
    setCart([]);
  };

  //  Obtener el total de productos en el carrito
  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  // Calcular el total a pagar del carrito
  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100; // redondea a 2 decimales
  };

  //  Valores y funciones que se comparten mediante el contexto
  const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};
