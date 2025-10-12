import Item from "../Item/Item";

const ItemDetail = ({ detail }) => {
  const { name, description, images, price } = detail;
  return (
    <Item  name={name} images={images} price={price}>
       <p>{description}</p>
      <button>Agregar al carrito</button>
    </Item>
  );
};

export default ItemDetail;