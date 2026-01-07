# 📦 Estructura de Componentes - Panadería Tradición

## Optimización del Proyecto

Se ha refactorizado la aplicación **Landingpanaderia.jsx** separando las secciones en componentes reutilizables y mantenibles.

## 📂 Componentes Creados

### 1. **Navbar.jsx**
- **Descripción**: Barra de navegación superior con logo y carrito
- **Props**: 
  - `cartLength`: Cantidad de productos en el carrito
  - `onCartClick`: Función para abrir el carrito
- **Características**:
  - Logo de la panadería
  - Botón flotante del carrito con badge de cantidad
  - Sticky (siempre visible)

### 2. **Hero.jsx**
- **Descripción**: Sección principal/banner con imagen de fondo
- **Props**: Ninguna
- **Características**:
  - Imagen de héroe con overlay oscuro
  - Títulos animados
  - 70% de altura de pantalla

### 3. **Especialidades.jsx**
- **Descripción**: Grid de categorías de productos
- **Props**:
  - `menuData`: Objeto con categorías y productos
  - `onOpenMenu`: Función para abrir modal de categoría
- **Características**:
  - 3 tarjetas de categorías
  - Imágenes dinámicas por categoría
  - Efecto hover con elevación

### 4. **ProductModal.jsx**
- **Descripción**: Modal para seleccionar productos de una categoría
- **Props**:
  - `isOpen`: Estado del modal
  - `selectedCategory`: Categoría activa
  - `menuData`: Datos de productos
  - `quantities`: Cantidades seleccionadas
  - `addingId`: ID del producto que se agregó
  - `onClose`: Función para cerrar
  - `onQuantityChange`: Cambiar cantidad
  - `onAddToCart`: Agregar al carrito
- **Características**:
  - Selector de cantidad
  - Animación de "agregado exitoso"
  - Scroll interno si hay muchos productos

### 5. **CartDrawer.jsx**
- **Descripción**: Panel lateral del carrito (drawer)
- **Props**:
  - `isOpen`: Estado del carrito
  - `cart`: Array de productos en carrito
  - `totalCart`: Total del pedido
  - `notes`: Observaciones del cliente
  - `onClose`: Cerrar carrito
  - `onQuantityChange`: Cambiar cantidad
  - `onRemoveItem`: Eliminar producto
  - `onNotesChange`: Actualizar observaciones
  - `onSendToWhatsApp`: Enviar pedido
- **Características**:
  - Gestión completa del carrito
  - Campo de observaciones/notas
  - Botón de integración con WhatsApp
  - Cálculo automático de totales

### 6. **FAQ.jsx**
- **Descripción**: Sección de preguntas frecuentes
- **Props**:
  - `faqs`: Array de preguntas y respuestas
  - `openFaq`: Índice de FAQ abierta
  - `onToggleFaq`: Función para toggle
- **Características**:
  - Acordeón expandible
  - Animaciones suaves
  - Iconos de flecha rotativa

### 7. **Contacto.jsx**
- **Descripción**: Sección de contacto con formulario
- **Props**: Ninguna
- **Características**:
  - Información de contacto (teléfono, email)
  - Formulario de consulta
  - Tarjetas de información con iconos
  - Responsive (grid 1/2 columnas)

### 8. **Footer.jsx**
- **Descripción**: Pie de página
- **Props**: Ninguna
- **Características**:
  - Información de la empresa
  - Estrellas interactivas
  - Derechos de autor
  - Fondo oscuro

### 9. **WhatsAppButton.jsx**
- **Descripción**: Botón flotante de WhatsApp
- **Props**:
  - `whatsappNumber`: Número de WhatsApp
  - `defaultMessage`: Mensaje por defecto
- **Características**:
  - Botón flotante fixed
  - Animación de bounce
  - Expansión al hover
  - Abre WhatsApp en nueva pestaña

## 🎯 Beneficios de la Refactorización

✅ **Mantenibilidad**: Cada componente tiene una responsabilidad única
✅ **Reutilización**: Los componentes pueden usarse en otras páginas
✅ **Legibilidad**: Código más limpio y organizado
✅ **Testing**: Más fácil de testear componentes individuales
✅ **Performance**: Mejor optimización con lazy loading si es necesario
✅ **Escalabilidad**: Estructura preparada para crecer el proyecto

## 🔄 Estado Global (en Landingpanaderia.jsx)

- `openFaq`: Para controlar QUÉ FAQ está abierta
- `isModalOpen`: Control del modal de productos
- `selectedCategory`: Categoría activa
- `addingId`: Para mostrar feedback visual al agregar
- `isCartOpen`: Estado del drawer del carrito
- `cart`: Array de productos seleccionados
- `quantities`: Objeto con cantidades por producto
- `notes`: Notas/observaciones del pedido

## 🚀 Cómo Usar

```jsx
import LandingPanaderia from './componentes/Landingpanaderia';

export default function App() {
  return <LandingPanaderia />;
}
```

## 📝 Notas Importantes

- Todos los datos están en **Landingpanaderia.jsx** (menuData, faqs)
- La lógica del carrito y estados globales se mantienen en el componente principal
- Los componentes hijos son principalmente **presentacionales** con props bien definidas
- Se puede migrar a Context API o Redux si el estado crece

## 🎨 Estilos

Todos los componentes usan **Tailwind CSS** con la paleta de colores:
- **Naranja** (#ff6b35, #ff8c42): Colores principales
- **Blanco/Gris**: Fondos neutros
- **Verde**: Botón de WhatsApp (#22c55e)

---

**Proyecto optimizado y estructurado el 6 de enero de 2026** ✨
