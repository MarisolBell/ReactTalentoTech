import { Link } from "react-router-dom"; 
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/category/pulseras" className={styles.navLink}>
            Pulseras
          </Link>
        </li>
        <li>
          <Link to="/category/cintos" className={styles.navLink}>
            Cintos
          </Link>
        </li>
        <li>
          <Link to="/category/collares" className={styles.navLink}>
            Collares
          </Link>
        </li>
        <li>
          <Link to="/category/billeteras" className={styles.navLink}>
            Billeteras
          </Link>
        </li>
        <li>
          <Link to="/category/aros" className={styles.navLink}>
            Aros
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
