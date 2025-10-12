import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Nav from "../Nav/Nav";
import logo from "/images/logo-voila.png";
import styles from "./Header.module.css";
const Header = () => {
  const cartCount = 1;
  return (
    <header className={styles.header}>
        <Link to="/">
        <img src={logo} alt="Voilá Logo"  />
        </Link>
        
        <Nav/>
        {/* CARRITO con contador */}
        {/* <Link to="/carrito" className={styles.cartWrapper} aria-label="Ir al carrito">
        <FiShoppingCart className={styles.cartIcon} />
        <span className={styles.cartCount}>{cartCount}</span>
        </Link> */}
    </header>
   
  )
}

export default Header