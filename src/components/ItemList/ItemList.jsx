import Item from "../Item/Item";
import listStyles from "./ItemList.module.css";   //  estilos del contenedor (flex)
import itemStyles from "../Item/Item.module.css"; //  estilos de los botones


const ItemList = ({ lista }) => {
  return (
    <div className={listStyles["productos-container"]}>
      {lista.length ? (
        lista.map((producto) => (
          <Item key={producto.id} {...producto}>
            <div className={itemStyles.buttonContainer}>
              <button
                className={`${itemStyles.buttonBase} ${itemStyles.btnBlack}`}
                onClick={() => console.log(`Ver más de ${producto.name}`)}
              >
                Ver más
      
              </button>
            </div>
          </Item>
        ))
      ) : (
        <p>No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default ItemList;
