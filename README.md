# Cava del Poeta

El proyecto es un e-comerce de una vinoteca online.

## Tecnologías utilizadas

- HTML, Scss, Javascript.

## Framework adicionales

- React

## Clonar repositorio

- git clone URL del Proyecto

## Instalar dependencias

- npm install

## Ejecutar proyecto

- npm start

## Componentes

- Cart: contiene el CartWidget y va a contener la seccion del carrito de compras
- ItemCount: contiene el contador.
- ItemDetailContainer: contiene el ItemDetailListContainer y el ItemDetail donde se renderiza el detalle de cada producto.
- ItemListContainer: contiene el ItemListContainer (se simula la peticion a un backend), ItemList (se configura el contenedor de productos), Items(renderiza cada producto), SearchWidget(boton de 'ver mas'), promociones (se renderizaran las promociones), regaleria (se renderizara la regaleria).
- nav-bar: encontramos el NavBar (barra de navegacion de la pagina);
- NavBarCategories: una segunda barra de navegacion que nos sirve para filtrar los productos por categorias.

## Rutas

- En la carpeta Routes se encuentra la configuracion de las rutas, para las cuales utilice react-router-dom.

## Styles

- Para los estilos utilice Scss, con arcghivos de estilos para los componentes que se encargan de renderizar y archivos de estilos compartidos que se encuentran en la carpetas styles, con el archivo de variables, utilities y btns.

## Hooks

- En la carpeta useCounter se encuentra un hook personalizado el cual utilizamos en el contador.
