import Item from "../Item/Item";
import styles from "../Item/Item.module.css";
import { FiShoppingCart } from "react-icons/fi"; 

const ItemDetail = ({ detail }) => {
  const { name, description, images, price } = detail;

  return (
    <Item name={name} images={images} price={price}>
      <p>{description}</p>

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.buttonBase} ${styles.btnBlack}`}
          onClick={() => console.log("Agregado al carrito:", name)}
        >
          <FiShoppingCart className={styles.icon} />
          Agregar al carrito
        </button>
      </div>
    </Item>
  );
};

export default ItemDetail;
