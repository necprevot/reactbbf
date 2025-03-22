import { useState, useEffect } from 'react'
import { getProducts, getOneProduct } from '../mock/asyncData'

// Filtro por categoria
export const useProducts = (categoryId = null) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    
    getProducts()
      .then((res) => {
        if (categoryId) {
          setProducts(res.filter((item) => item.category.includes(categoryId)))
        } else {
          setProducts(res)
        }
      })
      .catch((error) => {
        console.error('Error al recuperar producto:', error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  return { products, loading, error }
}

// Para detalle
export const useProductDetail = (productId) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!productId) return
    
    setLoading(true)
    
    getOneProduct(productId)
      .then((res) => {
        setProduct(res)
      })
      .catch((error) => {
        console.error('No se encuentra detalle', error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [productId])

  return { product, loading, error }
}