import {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo obtener la lista de productos. Intente nuevamente más tarde.");
        }
        return res.json();
      })
      .then((data) => {
        if (category){
          setProducts(data.filter((prod) => prod.category === category));
        } else{
           setProducts(data);
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  //llamada a una API
  return (
    <section>
      <h1 className={styles["titulo-principal"]}>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};

export default ItemListContainer;
