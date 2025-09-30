import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li> 
                <a className={styles.navLink} href="#">Home</a>
            </li>
            <li> 
                <a className={styles.navLink} href="#">New</a>
            </li>
            <li> 
                <a className={styles.navLink} href="#">Tienda</a>
            </li>
            <li>
                <a className={styles.navLink} href="#">Categorías</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav