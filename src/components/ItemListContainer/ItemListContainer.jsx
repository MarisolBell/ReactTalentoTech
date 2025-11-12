import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products.js";

const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts(category);
        setProducts(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div className={styles.loading}>Cargando productos...</div>;
  }

  if (error) {
    return <div className={styles.error}>❌ {error}</div>;
  }

  return (
    <section>
      <h1 className={styles["titulo-principal"]}>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};

export default ItemListContainer;
