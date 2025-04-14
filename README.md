# Beardy Boy's Fermentos - E-commerce

![Logo de Beardy Boy's Fermentos](/public/iconWhite.png)

## Descripción del Proyecto

Beardy Boy's Fermentos es una tienda en línea especializada en productos fermentados artesanales. Esta aplicación web está desarrollada con React y ofrece una experiencia de compra completa, desde la visualización de catálogos de productos hasta la finalización de compras.

## Pagina principal

![Pagina de inicio](/public/homebbf.png)

## Características Principales

- **Navegación por Categorías**: Exploración de productos por categorías como "Nuevos", "Más Vendidos" y "Ofertas"
- **Vista Detallada de Productos**: Información completa de cada producto con imágenes, descripciones y precios
- **Carrito de Compras**: Funcionalidad completa para agregar, modificar y eliminar productos
- **Proceso de Checkout**: Formulario de compra con validación de correo electrónico
- **Diseño Responsive**: Interfaz adaptada a diferentes tamaños de pantalla
- **Persistencia de Datos**: Almacenamiento en Firebase Firestore

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario
- **React Router**: Sistema de navegación entre diferentes vistas
- **Context API**: Manejo del estado global para el carrito de compras
- **Firebase/Firestore**: Base de datos NoSQL para almacenamiento de productos y órdenes
- **CSS**: Estilos personalizados para todas las vistas
- **React Icons**: Implementación de iconos para la interfaz
- **Vite**: Herramienta de construcción y desarrollo

## Instalación y Configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/beardy-boys-fermentos.git
   cd beardy-boys-fermentos
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Reemplazar la configuración en `src/service/firebase.jsx` con tus credenciales

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

## Estructura del Proyecto

```
src/
├── componentes/         # Componentes React
│   ├── CartContainer.jsx
│   ├── CartView.jsx
│   ├── CartWidget.jsx
│   ├── Checkout.jsx
│   ├── EmptyCart.jsx
│   ├── Footer.jsx
│   ├── Item.jsx
│   ├── ItemCounter.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── Navbar.jsx
│   └── Pag404.jsx
├── context/             # Contextos React
│   └── CartContext.jsx
├── hooks/               # Custom hooks
│   └── useProducts.jsx
├── service/             # Servicios externos
│   └── firebase.jsx
├── App.css              # Estilos principales
├── App.jsx              # Componente principal
├── index.css            # Estilos globales
└── main.jsx             # Punto de entrada
```

## Funcionalidades Detalladas

### Navegación
La aplicación implementa React Router para la navegación entre diferentes vistas:
- Página principal con todos los productos
- Categorías filtradas de productos
- Vista detallada de cada producto
- Carrito de compras
- Proceso de checkout
- Página 404 para rutas no encontradas

### Carrito de Compras
El carrito utiliza Context API para mantener el estado global:
- Agregar productos con control de cantidad
- Modificar cantidades de productos
- Eliminar productos individuales
- Vaciar carrito completo
- Cálculo automático del total

### Proceso de Compra
El checkout incluye:
- Formulario de datos personales
- Validación de campos requeridos
- Confirmación de correo electrónico
- Generación de orden en Firestore
- Actualización automática de stock

## Base de Datos

### Colección "productos"
Almacena la información de cada producto con los siguientes campos:
- `name`: Nombre del producto
- `price`: Precio
- `description`: Descripción detallada
- `img`: URL de la imagen
- `stock`: Cantidad disponible
- `category`: Array de categorías a las que pertenece

### Colección "orders"
Registra las órdenes de compra con los siguientes campos:
- `comprador`: Datos del comprador
- `compras`: Array de productos comprados
- `total`: Monto total de la compra
- `date`: Fecha y hora de la compra (generada con serverTimestamp)

## Mejoras Implementadas

- **Diseño Responsive**: Adaptación a diferentes tamaños de pantalla
- **Validación de Formularios**: Comprobación de campos requeridos y coincidencia de correo electrónico
- **Manejo de Carga**: Indicadores visuales durante la carga de datos
- **Manejo de Errores**: Mensajes informativos en caso de problemas
- **Experiencia de Usuario**: Navegación intuitiva y feedback visual

## Licencia

Todos los derechos reservados © Beardy Boy's Fermentos

## Contacto

Para más información, contactar a través de redes sociales:
- [Facebook](https://facebook.com/beardyboysfermentos)
- [Instagram](https://instagram.com/beardyboysfermentos)
