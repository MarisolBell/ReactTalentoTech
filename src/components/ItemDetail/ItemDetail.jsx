import Item from "../Item/Item";
import styles from "../Item/Item.module.css";
import { FiShoppingCart } from "react-icons/fi"; 
import { useCartContext } from "../../context/CartContext/UseCartContext";


const ItemDetail = ({ detail }) => {
  const { name, description, images, price } = detail;
  const { addItem } = useCartContext(); 

  return (
    <Item name={name} images={images} price={price}>
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
    </Item>
  );
};

export default ItemDetail;
