import './App.css'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Pag404 from './componentes/Pag404'
import CartContainer from './componentes/CartContainer'
import { CartProvider } from './context/CartContext'
import Checkout from './componentes/Checkout'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'Bienvenid@'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Seleccionaste la categoria:' />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/> }/>
        <Route path="*" element={<Pag404 />} />
      </Routes>
      </main>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
