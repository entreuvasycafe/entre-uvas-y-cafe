import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

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
    const categoria = (data.categoria || "").trim();
    if (!productosPorCategoria[categoria]) {
      productosPorCategoria[categoria] = [];
    }
    productosPorCategoria[categoria].push(data);
  });

  crearBotonesCategorias();
  mostrarProductos();
}

function crearBotonesCategorias() {
  // Agregar clase para scroll
  contenedorBotones.classList.add("botones-scroll");
  contenedorBotones.innerHTML = "";

  const botonTodos = document.createElement("button");
  botonTodos.textContent = "TODOS";
  botonTodos.classList.add("btn","btn-personalizado", "me-2", "mb-2", "activo");
  botonTodos.onclick = () => {
    mostrarProductos();
    marcarBotonActivo(botonTodos);
  };
  contenedorBotones.appendChild(botonTodos);

  ordenCategorias.forEach((catNombre) => {
    if (productosPorCategoria[catNombre]) {
      const boton = document.createElement("button");
      boton.textContent = catNombre.toUpperCase();
      boton.classList.add("btn","btn-personalizado", "me-2", "mb-2");
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

    if (!filtrarCategoria) {
      const tituloCategoria = document.createElement("h3");
      tituloCategoria.classList.add("mb-4");
      tituloCategoria.textContent = categoria;
      contenedor.appendChild(tituloCategoria);
    }

    const productosGrid = document.createElement("div");
    productosGrid.classList.add("row", "row-cols-1", "row-cols-md-2", "g-4");
    productosGrid.setAttribute("data-categoria", categoria);

    productosPorCategoria[categoria].forEach((producto) => {
      const item = document.createElement("div");
      item.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card", "h-100", "shadow", "d-flex", "flex-row");

      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.titulo;
      img.classList.add("img-fluid", "rounded", "card-img-padded");
      img.style.maxWidth = "150px";
      img.style.width = "100%";
      img.style.height = "150px";
      img.style.objectFit = "cover";

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const titulo = document.createElement("h5");
      titulo.classList.add("card-title");
      titulo.textContent = producto.titulo;

      const descripcion = document.createElement("p");
      descripcion.classList.add("card-text");
      descripcion.textContent = producto.descripcion;

      const precio = document.createElement("p");
      precio.classList.add("precio");
      precio.textContent = `$${producto.precio}`;

      cardBody.appendChild(titulo);
      cardBody.appendChild(descripcion);
      cardBody.appendChild(precio);

      card.appendChild(img);
      card.appendChild(cardBody);

      item.appendChild(card);
      productosGrid.appendChild(item);
    });

    contenedor.appendChild(productosGrid);
  });
}




cargarProductos();
