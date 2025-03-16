import './App.css'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'Bienvenid@'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Seleccionaste la categoria:' />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
