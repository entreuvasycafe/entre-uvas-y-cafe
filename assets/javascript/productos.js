
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBM2fFPK3Fb5UK-PbWIYdP-SpFZug0mt-0",
  authDomain: "pruebaentreuvasycafe.firebaseapp.com",
  projectId: "pruebaentreuvasycafe",
  storageBucket: "pruebaentreuvasycafe.firebasestorage.app",
  messagingSenderId: "971782771779",
  appId: "1:971782771779:web:cd0eb94abdbe9cece3f0f6",
  measurementId: "G-GFFYS8EW70"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contenedor = document.getElementById("contenedor-productos");
const contenedorBotones = document.getElementById("botones-categorias");

let productosPorCategoria = {};
const ordenCategorias = [
  "Tortas",
  "Postres",
  "Tartaletas",
  "Quiches",
  "Empanadas",
  "Té en hoja",
  "Café especialidad",
  "Otros"
];

async function cargarProductos() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  productosPorCategoria = {};

  querySnapshot.forEach((doc) => {
    const data = doc.data();
   const categoria = (data.categoria || "").trim(); // ← Usamos la versión limpia
if (!productosPorCategoria[categoria]) {
  productosPorCategoria[categoria] = [];
}
productosPorCategoria[categoria].push(data);
  });
// 🔍 Agrega los logs aquí
  console.log("Categorías cargadas:", Object.keys(productosPorCategoria));
  console.log("Contenido de 'Otros':", productosPorCategoria["Otros"]);
  crearBotonesCategorias(); // crea los botones
  mostrarProductos(); // muestra todos al inicio
}

function crearBotonesCategorias() {
  contenedorBotones.innerHTML = "";

  const botonTodos = document.createElement("button");
  botonTodos.textContent = "TODOS";
  botonTodos.classList.add("btn-categoria", "activo"); // activo por defecto
  botonTodos.onclick = () => {
    mostrarProductos();
    marcarBotonActivo(botonTodos);
  };
  contenedorBotones.appendChild(botonTodos);

  ordenCategorias.forEach((catNombre) => {
  if (productosPorCategoria[catNombre]) {
    const boton = document.createElement("button");
    boton.textContent = catNombre.toUpperCase(); // solo para mostrar
    boton.classList.add("btn-categoria");
    boton.onclick = () => {
      mostrarProductos(catNombre);
      marcarBotonActivo(boton);
    };
    contenedorBotones.appendChild(boton);
  }
});
}

function marcarBotonActivo(botonSeleccionado) {
  const botones = contenedorBotones.querySelectorAll("button");
  botones.forEach((btn) => btn.classList.remove("activo"));
  botonSeleccionado.classList.add("activo");
}

function mostrarProductos(filtrarCategoria = null) {
  contenedor.innerHTML = "";

  const categorias = filtrarCategoria
    ? [filtrarCategoria]
     : ordenCategorias.filter(cat => productosPorCategoria[cat]);

  categorias.forEach((categoria) => {
    if (!productosPorCategoria[categoria]) return;

    const categoriaContenedor = document.createElement("div");
    categoriaContenedor.classList.add("categoria-contenedor");

    if (!filtrarCategoria) {
      const tituloCategoria = document.createElement("h3");
      tituloCategoria.classList.add("categoria-titulo");
      tituloCategoria.textContent = categoria;
      categoriaContenedor.appendChild(tituloCategoria);
    }

    const productosGrid = document.createElement("div");
    productosGrid.classList.add("productos-grid");

    productosPorCategoria[categoria].forEach((producto) => {
      const item = document.createElement("div");
      item.classList.add("diseño__item");

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("diseño__img");

      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.titulo;
      imgDiv.appendChild(img);

      const contenidoDiv = document.createElement("div");
      contenidoDiv.classList.add("diseño__contenido");

      const titulo = document.createElement("h3");
      titulo.textContent = producto.titulo;

      const descripcion = document.createElement("p");
      descripcion.textContent = producto.descripcion;

      const precio = document.createElement("div");
      precio.classList.add("precio");
      precio.textContent = `$${producto.precio}`;

      contenidoDiv.appendChild(titulo);
      contenidoDiv.appendChild(descripcion);
      contenidoDiv.appendChild(precio);

      item.appendChild(contenidoDiv);
      item.appendChild(imgDiv);

      productosGrid.appendChild(item);
    });

    categoriaContenedor.appendChild(productosGrid);
    contenedor.appendChild(categoriaContenedor);
  });
}
cargarProductos();
