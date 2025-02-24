import './App.css'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'

function App() {

  const usuario = {
    name: 'Lee'
  }

  return (
    <>
      <Navbar/>
      <main>
      <ItemListContainer greeting={'Bienvenid@'} nombre={usuario.name}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
