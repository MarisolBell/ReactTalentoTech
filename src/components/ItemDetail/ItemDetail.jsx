import { useNavigate } from "react-router-dom";
import styles from "../Item/Item.module.css"; 
import { useCartContext } from "../../context/CartContext/useCartContext";
import Count from "../Count/Count";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";

const ItemDetail = ({ detail }) => {
  const { name, description, images, price } = detail;
  const { addItem } = useCartContext(); 
  const navigate = useNavigate();

  const handleAddItem = (quantity) => {
    addItem({...detail, quantity});
  };

  const handleGoBack = () => {
    navigate(-1); // Vuelve a la página anterior
  };

  return (
    <article className={`${styles.itemCard} ${styles.detailCard}`}>
      {images && images.length > 0 && (
        <img src={images[0]} alt={name} className={styles.itemImage} />
      )}
      <div className={styles.itemContent}>
        <h2>{name}</h2>
        <p className={styles.detailDescription}>{description}</p>
        <h3>Precio: ${price}</h3>

        {/* Contador y botones separados */}
        <Count 
          btnText="Agregar al carrito"
          onConfirm={handleAddItem}
          icon={FiShoppingCart}
          showBackButton={true}
          onBack={handleGoBack}
        />
      </div>
    </article>
  );
};

export default ItemDetail;