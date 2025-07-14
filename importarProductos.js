const admin = require('firebase-admin');
const fs = require('fs');

// Cargar credenciales del servicio
const serviceAccount = require('./credentials.json');

// Inicializar Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Cargar productos desde archivo JSON
const productos = JSON.parse(fs.readFileSync('productos.json', 'utf8'));

const importarProductos = async () => {
  try {
    const batch = db.batch();

    productos.forEach((producto) => {
      const docRef = db.collection('productos').doc(producto.id);
      const { id, ...resto } = producto; // Excluye el ID del contenido
      batch.set(docRef, resto);
    });

    await batch.commit();
    console.log('✅ Productos importados correctamente');
  } catch (error) {
    console.error('❌ Error al importar productos:', error);
  }
};

importarProductos();
