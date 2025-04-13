import { useState, useEffect } from 'react'
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

// Filtro por categoria
export const useProducts = (categoryId = null) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    
    // Referencia a la colección de productos
    const productsCollection = collection(db, "productos")
    
    // Si hay una categoría, usamos query con where, si no, traemos todos
    if (categoryId) {
      // Creamos una consulta filtrada por categoría
      const q = query(productsCollection, where("category", "array-contains", categoryId));
      
      getDocs(q)
        .then((querySnapshot) => {
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setProducts(productsList);
        })
        .catch((err) => {
          console.error("Error obteniendo productos:", err);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      // Si no hay categoría, obtenemos todos los productos
      getDocs(productsCollection)
        .then((querySnapshot) => {
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setProducts(productsList);
        })
        .catch((err) => {
          console.error("Error obteniendo productos:", err);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return { products, loading, error }
}

// Para detalle de producto
export const useProductDetail = (productId) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!productId) return
    
    setLoading(true)
    
    // Referencia al documento específico
    const productDocRef = doc(db, "productos", productId);
    
    getDoc(productDocRef)
      .then((productDoc) => {
        if (productDoc.exists()) {
          // Si el documento existe, lo convertimos al formato esperado
          setProduct({
            id: productDoc.id,
            ...productDoc.data()
          });
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.error('No se encuentra detalle', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading, error }
}