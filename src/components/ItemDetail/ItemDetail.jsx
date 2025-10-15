import Item from "../Item/Item";
import styles from "../Item/Item.module.css";
import { FiShoppingCart } from "react-icons/fi"; 
import { useCartContext } from "../../context/CartContext/UseCartContext";

const ItemDetail = ({ detail }) => {
  const { name, description, images, price } = detail;
  const { addItem } = useCartContext(); 

  return (
    // 🆕 CAMBIO IMPORTANTE: Agregamos la clase detailCard al artículo
    <article className={`${styles.itemCard} ${styles.detailCard}`}>
      {images && images.length > 0 && (
        <img src={images[0]} alt={name} className={styles.itemImage} />
      )}
      <div className={styles.itemContent}>
        <h2>{name}</h2>
        <h3>Precio: ${price}</h3>
        {/* 🆕 Mostramos la descripción directamente aquí */}
        <p>{description}</p>

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.buttonBase} ${styles.btnBlack}`}
            onClick={() => addItem(detail)}
          >
            <FiShoppingCart className={styles.icon} />
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;