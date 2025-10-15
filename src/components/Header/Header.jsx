import { Link } from "react-router-dom";
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
       
    </header>
   
  )
}

export default Header