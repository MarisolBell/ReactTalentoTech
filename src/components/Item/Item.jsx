import styles from './Item.module.css';

const Item = ({ nombre, descripcion, imagen, precio }) => {
  return (
    <article className={styles.itemCard}> 
      
      {imagen && imagen.length > 0 && (
        <img src={imagen[0]} alt={nombre} className={styles.itemImage} />
      )}
      <div className={styles.itemContent}>
        <h2>{nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <p className={styles.description}>Descripción: {descripcion}</p>
      </div>
    </article>
  );
}

export default Item;