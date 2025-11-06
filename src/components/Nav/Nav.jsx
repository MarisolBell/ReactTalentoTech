import { Link } from "react-router-dom";
import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";
import styles from "./Nav.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../../context/CartContext/useCartContext";

const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <>
      {/* Menú hamburguesa para mobile */}
      <Navbar expand="md" className={styles.navbarCustom}>
        <Container fluid className={styles.navbarContainer}>
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            className={`ms-auto ${styles.hamburgerToggle}`}
          />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <BootstrapNav className={styles.navList}>
              <BootstrapNav.Item>
                <Link to="/" className={styles.navLink}>
                  Home
                </Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/category/pulseras" className={styles.navLink}>
                  Pulseras
                </Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/category/cintos" className={styles.navLink}>
                  Cintos
                </Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/category/collares" className={styles.navLink}>
                  Collares
                </Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/category/billeteras" className={styles.navLink}>
                  Billeteras
                </Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/category/aros" className={styles.navLink}>
                  Aros
                </Link>
              </BootstrapNav.Item>
            </BootstrapNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carrito flotante - siempre visible */}
      <div className={styles.cart}>
        <Link to="/carrito" className={styles.cartLink}>
          <FiShoppingCart className={styles.cartIcon} />
          {getTotalItems() > 0 && (
            <span className={styles.cartNumber}>{getTotalItems()}</span>
          )}
        </Link>
      </div>
    </>
  );
};

export default Nav;