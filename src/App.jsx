import './App.css'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Pag404 from './componentes/Pag404'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'Bienvenid@'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Seleccionaste la categoria:' />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Pag404 />} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
