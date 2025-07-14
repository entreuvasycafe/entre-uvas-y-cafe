const admin = require('firebase-admin');
const fs = require('fs');

// Cargar las credenciales del servicio
const serviceAccount = require('./credentials.json');

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const exportarProductos = async () => {
  try {
    const snapshot = await db.collection('productos').get();
    const productos = [];

    snapshot.forEach(doc => {
      productos.push({
        id: doc.id,
        ...doc.data()
      });
    });

    fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
    console.log('✅ Productos exportados a productos.json');
  } catch (error) {
    console.error('❌ Error exportando:', error);
  }
};

exportarProductos();
