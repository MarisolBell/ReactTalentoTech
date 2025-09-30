import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
 
  return (
    <div className={styles.app}>
      <Header/>
      <ItemListContainer titulo={"BIENVENIDOS A VOILÁ ACCESORIOS"} />
      <Footer/>
    </div>
  )
}

export default App
