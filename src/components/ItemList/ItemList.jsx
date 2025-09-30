import Item from "../Item/Item"
import styles from './ItemList.module.css';


const ItemList = ({lista}) => {
  return (
    <div  className={styles['productos-container']} >
    {lista.length ? lista.map((producto) => <Item key={producto.id} {...producto}/>) 
         : (<p>No hay productos para mostrar</p>)}
    </div>
  )
}

export default ItemList