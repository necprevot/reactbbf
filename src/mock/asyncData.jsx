const productos = [
    {
        id:'01',
        name:'Cerezas al Vinagre',
        price:1000,
        description: 'Un equilibrio perfecto entre dulzura y acidez. Nuestras cerezas al vinagre son una explosión de sabor en cada bocado, ideales para acompañar quesos, ensaladas o carnes. Fermentadas de manera artesanal, conservan su textura y propiedades naturales.',
        stock:10,
        category:['nuevos'],
        img:'../productos/cerezas.png'
    },
    {
        id:'02',
        name:'Chucrut',
        price:2000,
        description: 'El clásico fermentado de repollo, rico en probióticos y con un sabor intenso y ligeramente ácido. Perfecto para acompañar carnes, ensaladas o simplemente disfrutar solo. Elaborado con ingredientes naturales y sin conservantes.',
        stock:50,
        category:['mas vendidos', 'ofertas'],
        img:'../productos/chucrut.png'
    },
    {
        id:'03',
        name:'Kimchi',
        price:2500,
        description: 'Auténtico kimchi de receta tradicional, con el nivel justo de picante y fermentado para potenciar su sabor umami. Una opción deliciosa y saludable, ideal para acompañar arroz, sopas o disfrutar como snack.',
        stock:20,
        category:['mas vendidos'],
        img:'../productos/kimchi.png'
    },
    {
        id:'04',
        name:'Zanahorias Fermentadas',
        price:2000,
        description: 'Crujientes y llenas de sabor, nuestras zanahorias fermentadas son una opción refrescante y nutritiva. Su fermentación natural potencia su sabor ligeramente ácido, perfecto para acompañar platos fríos, carnes o comer como aperitivo.',
        stock:30,
        category:['ofertas'],
        img:'../productos/zanahorias.png'
    }
]

//creo y exporto mi promesa

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },3000)
    })
}

//buscar un producto

export const getOneProduct = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            let product = productos.find(prod => prod.id === id)
            resolve(product)
        },2000)
    })
}