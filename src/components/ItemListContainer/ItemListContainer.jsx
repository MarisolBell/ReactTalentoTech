// // import {useState, useEffect } from "react";
// // import ItemList from "../ItemList/ItemList";
// // import styles from "./ItemListContainer.module.css";
// // import { useParams } from "react-router-dom";

// // const ItemListContainer = ({ titulo }) => {
// //   const [products, setProducts] = useState([]);
// //   const {category} = useParams();

// //   useEffect(() => {
// //     fetch("/data/products.json")
// //       .then((res) => {
// //         if (!res.ok) {
// //           throw new Error("No se pudo obtener la lista de productos. Intente nuevamente más tarde.");
// //         }
// //         return res.json();
// //       })
// //       .then((data) => {
// //         if (category){
// //           setProducts(data.filter((prod) => prod.category === category));
// //         } else{
// //            setProducts(data);
// //         }
       
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, [category]);

// //   //llamada a una API
// //   return (
// //     <section>
// //       <h1 className={styles["titulo-principal"]}>{titulo}</h1>
// //       <ItemList lista={products} />
// //     </section>
// //   );
// // };

// // export default ItemListContainer;
// import { useState, useEffect } from "react";
// import ItemList from "../ItemList/ItemList";
// import styles from "./ItemListContainer.module.css";
// import { useParams } from "react-router-dom";

// const BASE_URL = "https://6902bd07b208b24affe70b66.mockapi.io/products";

// const ItemListContainer = ({ titulo }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { category } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetch(BASE_URL)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("No se pudo obtener la lista de productos. Intente nuevamente más tarde.");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (category) {
//           setProducts(data.filter((prod) => prod.category === category));
//         } else {
//           setProducts(data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) {
//     return <div className={styles.loading}>Cargando productos...</div>;
//   }

//   if (error) {
//     return <div className={styles.error}>{error}</div>;
//   }

//   return (
//     <section>
//       <h1 className={styles["titulo-principal"]}>{titulo}</h1>
//       <ItemList lista={products} />
//     </section>
//   );
// };

// export default ItemListContainer;

import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";

const BASE_URL = "https://6902bd07b208b24affe70b66.mockapi.io/products";

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

        // Construimos la URL según haya categoría o no
        const url = category ? `${BASE_URL}?category=${category}` : BASE_URL;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("No se pudo obtener la lista de productos.");
        }

        const data = await res.json();
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
