import './App.css'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'


function App() {

  const usuario = {
    name: 'Lee'
  }

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenid@'} nombre={usuario.name}/>
    </>
  )
}

export default App
