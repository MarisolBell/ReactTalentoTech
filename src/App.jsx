import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
 
  return (
    <div className={styles.app}>
      <Header/>
      <ItemListContainer titulo={"BIENVENIDOS A VOILÁ ACCESORIOS"} />
      <ItemDetailContainer/>
      <Footer/>
    </div>
  )
}

export default App
