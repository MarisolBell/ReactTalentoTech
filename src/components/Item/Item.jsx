import styles from './Item.module.css';

const Item = ({name, images, description,price,children }) => {
  return (
    <article className={styles.itemCard}> 
      {images && (
        <img src={images} alt={name} className={styles.itemImage} />
      )}
      <div className={styles.itemContent}>
        <h2>{name}</h2>
        <h3>Precio: ${price}</h3>
        {children}
      </div>
    </article>
  );
}

export default Item;
