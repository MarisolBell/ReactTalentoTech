import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./Count.module.css";
import itemStyles from "../Item/Item.module.css";

const Count = ({ 
  btnText = "Agregar al carrito", 
  onConfirm, 
  icon: Icon,
  showBackButton = false,
  onBack
}) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleConfirm = () => {
    if (count > 0) {
      onConfirm(count);
      setCount(1); // Resetea a 1 después de confirmar
    }
  };

  return (
    <div className={styles.countContainer}>
      {/* Primera línea: Contador */}
      <div className={styles.countButtons}>
        <button
          onClick={decrement}
          className={styles.btn}
          disabled={count === 1}
        >
          −
        </button>
        <span className={styles.countValue}>{count}</span>
        <button onClick={increment} className={styles.btn}>
          +
        </button>
      </div>

      {/* Segunda línea: Botones */}
      <div className={styles.actionButtons}>
        {showBackButton && (
          <button
            className={`${itemStyles.buttonBase} ${itemStyles.btnGreen}`}
            onClick={onBack}
          >
            <FiArrowLeft className={itemStyles.icon} />
            Volver
          </button>
        )}
        
        <button
          className={`${itemStyles.buttonBase} ${itemStyles.btnBlack}`}
          onClick={handleConfirm}
          disabled={count === 0}
        >
          {Icon && <Icon className={itemStyles.icon} />}
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Count;