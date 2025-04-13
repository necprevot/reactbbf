import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    
    const { products, loading, error } = useProducts(categoryId)



    return (
        <main>
            <h1 className='text-success'>
                {greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}
            </h1>
            
            {error && <p>Ha ocurrido un error: {error}</p>}
            {loading ? <p>Cargando...</p> : <ItemList data={products}/>}
        </main>
    )
}

export default ItemListContainer
