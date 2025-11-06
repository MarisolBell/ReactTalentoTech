import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext"; 
import styles from "./Cart.module.css"; 
import { FiArrowLeft, FiTrash2, FiShoppingBag, FiShoppingCart } from "react-icons/fi";

const Cart = () => {
   
    const { cart, clearCart, deleteItem, total, checkout } = useCartContext();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); 
    };

    const handleContinueShopping = () => {
        navigate('/'); 
    };

    return (
        <section className={styles.cartContainer}>
            
            {/* Botón de Volver */}
            <button 
                onClick={handleGoBack} 
                className={`${styles.buttonBase} ${styles.backButton}`}
            >
                <FiArrowLeft className={styles.icon} /> Volver
            </button>
            
            <h1 className={styles.cartTitle}>Tu Carrito de Compras</h1>

            {cart.length ? (
                <>
                    {/* Lista de productos en el carrito */}
                    {cart.map((prod) => (
                        <div key={prod.id} className={styles.cartItem}>
                            
                            {prod.images &&  (
                                <img 
                                    src={prod.images} 
                                    alt={prod.name} 
                                    className={styles.cartItemImage} 
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/70x70/D3D3D3/2E2E2E?text=Prod" }}
                                />
                            )}

                            {/* Detalles del Producto */}
                            <div className={styles.itemInfo}>
                                <div className={styles.itemDetails}>
                                    <h2>{prod.name}</h2>
                                    <p>Subtotal: ${prod.price * prod.quantity}</p> 
                                </div>
                            </div>

                            {/* Cantidad */}
                            <p className={styles.itemQuantity}>
                               x {prod.quantity}
                            </p>
                            
                            {/* Botón de Eliminar con ícono de carrito */}
                            <button 
                                onClick={() => deleteItem(prod.id)}
                                className={`${styles.buttonBase} ${styles.btnRemoveItem}`}
                            >
                                <FiShoppingCart className={styles.icon} /> Eliminar
                            </button>
                        </div>
                    ))}

                    {/* Resumen y botones de acción */}
                    <div className={styles.cartSummary}>
                        <p className={styles.cartTotal}>
                            Total a pagar: ${total()}
                        </p>

                        <div className={styles.buttonGroup}>
                            <button 
                                onClick={checkout}
                                className={`${styles.buttonBase} ${styles.btnCheckout}`}
                            >
                                <FiShoppingBag className={styles.icon} /> Finalizar Compra
                            </button>
                            
                            <button 
                                onClick={handleContinueShopping}
                                className={`${styles.buttonBase} ${styles.btnContinueShopping}`}
                            >
                                <FiArrowLeft className={styles.icon} /> Seguir Comprando
                            </button>
                            
                            <button 
                                onClick={clearCart}
                                className={`${styles.buttonBase} ${styles.btnClear}`}
                            >
                                <FiTrash2 className={styles.icon} /> Vaciar Carrito
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                // Carrito vacío
                <div className={styles.emptyCartContainer}>
                    <p className={styles.cartEmpty}>
                        El carrito está vacío. ¡Empieza a comprar! 
                    </p>
                    <button 
                        onClick={handleContinueShopping}
                        className={`${styles.buttonBase} ${styles.btnContinueShopping}`}
                    >
                        <FiShoppingCart className={styles.icon} /> Ver Productos
                    </button>
                </div>
            )}
        </section>
    );
};

export default Cart;