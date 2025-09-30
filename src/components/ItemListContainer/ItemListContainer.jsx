import {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo obtener la lista de productos. Intente nuevamente más tarde.");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //llamada a una API
  return (
    <section>
      <h1 className={styles["titulo-principal"]}>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};

export default ItemListContainer;
