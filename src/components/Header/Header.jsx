import Nav from "../Nav/Nav";
import logo from "/images/logo-voila.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} />
        <Nav/>
    </header>
   
  )
}

export default Header