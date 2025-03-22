import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useProductDetail } from '../hooks/useProducts'

const ItemDetailContainer = () => {
  const { id } = useParams()
  
  const { product, loading, error } = useProductDetail(id)

  return (
      <div>
          {error && <p>Ha ocurrido un error: {error}</p>}
          {loading ? <p>Cargando...</p> : <ItemDetail product={product}/>}
      </div>
  )
}

export default ItemDetailContainer
