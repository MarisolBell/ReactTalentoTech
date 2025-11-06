import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const BASE_URL = "https://6902bd07b208b24affe70b66.mockapi.io/products";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontro el producto");
        }

        return res.json();
      })
      .then((data) => {
        console.log("Productos:", data);
        const found = data.find((p) => p.id === id);
        console.log("Producto encontrado:", found);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};
export default ItemDetailContainer;

// otra forma inicializando el estado detail en null

// import { useEffect, useState } from "react";
// import ItemDetail from "../ItemDetail/ItemDetail";

// const ItemDetailContainer = () => {
//   // Inicializamos con null en lugar de {}
//   const [detail, setDetail] = useState(null);

//   useEffect(() => {
//     fetch("/data/products.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("No se encontró el producto");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Productos:", data);
//         const found = data.find((p) => p.id === "3");
//         console.log("Producto encontrado:", found);
//         if (found) {
//           setDetail(found);
//         } else {
//           throw new Error("Producto no encontrado");
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <main>
//       {detail ? (
//         <ItemDetail detail={detail} />
//       ) : (
//         <p>Cargando...</p>
//       )}
//     </main>
//   );
// };

// export default ItemDetailContainer;
