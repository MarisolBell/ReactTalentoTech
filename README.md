#  Voilà Accesorios

> E-commerce de accesorios femeninos, desarrollado con React. Una plataforma moderna y funcional para la compra en línea de accesorios exclusivos, con una interfaz amigable y una experiencia de usuario optimizada.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

##  Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Uso](#-uso)
- [Despliegue](#-despliegue)
- [Licencia](#-licencia)
- [Autor](#-autor)

---

## Características

- **Catálogo de productos**: Visualización de accesorios femeninos con imágenes y detalles
- **Vista detallada**: Página de detalle para cada producto con información completa
- **Carrito de compras**: Sistema de carrito funcional con contador de items
- **Diseño responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Filtrado por categorías**: Navegación por Pulseras, Cintos, Collares, Billeteras y Aros (Entrega final)
-  **Rendimiento optimizado**: Construido con Vite para carga rápida
- **Animaciones suaves**: Transiciones y efectos visuales modernos
- **Navegación intuitiva**: Menú responsive con carrito flotante en móviles

---

## Tecnologías

### Core
- **React 19.1.1** - Librería de JavaScript para construir interfaces de usuario
- **Vite 7.1.2** - Build tool y dev server ultrarrápido
- **React Router DOM 7.9.4** - Enrutamiento declarativo para React

### Librerías Adicionales
- **React Icons 5.5.0** - Iconos modernos para la interfaz
- **CSS Modules** - Estilos con scope local

### Dev Tools
- **ESLint 9.33.0** - Linter para mantener código limpio
- **@vitejs/plugin-react** - Plugin oficial de React para Vite

---

##  Estructura del Proyecto

```
tpfinalreacttalento/
│
├── public/                    # Archivos estáticos
│   ├── data/
│   │   └── products.json      # Base de datos local de productos
│   └── images/                # Imágenes de productos y logo
│
├── src/
│   ├── components/            # Componentes de React
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Item/              # Tarjeta de producto
│   │   ├── ItemDetail/        # Vista detallada del producto
│   │   ├── ItemDetailContainer/
│   │   ├── ItemList/          # Lista de productos
│   │   ├── ItemListContainer/
│   │   └── Nav/               # Navegación y carrito
│   │
│   ├── context/               # Context API
│   │   └── CartContext/
│   │       ├── CartContext.js
│   │       ├── CartProvider.jsx
│   │       └── useCartContext.js
│   │
│   ├── App.jsx                # Componente principal
│   ├── App.module.css         # Estilos globales
│   ├── index.css              # Variables CSS globales
│   └── main.jsx               # Punto de entrada
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Instalación

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/MarisolBell/ReactTalentoTech.git
cd tpfinalreacttalento

```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

---

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
Inicia el servidor de desarrollo en modo rápido.
- Abre [http://localhost:5173](http://localhost:5173) en tu navegador
- La página se recargará automáticamente cuando hagas cambios
- Verás los errores de lint en la consola

### `npm run build`
Construye la aplicación para producción en la carpeta `dist`.
- Optimiza el build para el mejor rendimiento
- El código está minificado
- Los nombres de archivo incluyen hashes

### `npm run preview`
Previsualiza la build de producción localmente antes de desplegar.

### `npm run lint`
Ejecuta ESLint para encontrar y reportar problemas en el código.

---

## Uso

### Navegación Principal
1. **Inicio**: Muestra todos los productos disponibles
2. **Categorías**: Se desarrollará en la entrega final. Filtrará productos por tipo (Pulseras, Cintos, Collares, etc.) 
3. **Detalle**: Click en "Ver más" para ver información completa del producto
4. **Carrito**: Por ahora solo muestra items agregados

### Agregar Productos al Carrito
1. Navega al detalle del producto
2. Click en "Agregar al carrito"
3. El contador del carrito se actualizará automáticamente

### Responsive Design
- **Desktop**: Navegación horizontal con carrito en el header
- **Mobile**: Menú vertical con carrito flotante en la esquina inferior derecha

---

##  Despliegue

Este proyecto está configurado para ser desplegado en **Vercel**.

### Despliegue Automático con Vercel

1. **Conectar con GitHub**
```bash
# Subir el código a GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

3. **Configuración de Build**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click en "Deploy"
   - Tu sitio estará disponible en minutos

### Despliegue Manual

```bash
# Construir para producción
npm run build

# La carpeta 'dist' contendrá los archivos optimizados
# Puedes subirla a cualquier servicio de hosting estático
```

---

##  Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## Autor

**Marisol Belliard**

- GitHub: https://github.com/MarisolBell
- Email: msolbelliard@gmail.com

---

**Desarrollado con ❤️ por Marisol Belliard**