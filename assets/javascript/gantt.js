
const tasks = [
    { id: "1", name: "analisis del sitio actual y revision", start: "2025-05-10", end: "2025-05-12", progress: 100, dependencies: "" },
    { id: "2", name: "reunir fotos e informacion quienes somos,testimonios", start: "2025-05-13", end: "2025-05-14", progress: 90, dependencies: "1" },
    { id: "3", name: "configuracion del entorno y tecnologias", start: "2025-05-15", end: "2025-05-18", progress: 100, dependencies: "2" },
    { id: "4", name: "actualizar carrucel de imagenes", start: "2025-05-19", end: "2025-05-22", progress: 90, dependencies: "3" },
    { id: "5", name: "desarrollar login y administracion de productos(firebase)", start: "2025-05-23", end: "2025-05-29", progress: 90, dependencies: "4" },
    { id: "6", name: "implementar presentacion de productos(categorias y precios)", start: "2025-05-30", end: "2025-06-04", progress: 90, dependencies: "5" },
    { id: "7", name: "crear seccion de testimonios", start: "2025-06-05", end: "2025-06-09", progress: 90, dependencies: "6" },
    { id: "9", name: "formulario de contactos y envio de correos", start: "2025-06-10", end: "2025-06-13", progress: 0, dependencies: "7" },
    { id: "10", name: "actualizar seccion quienes somos", start: "2025-06-14", end: "2025-06-17", progress: 90, dependencies: "9" },
    { id: "11", name: "actualizar seccion de servicios", start: "2025-06-18", end: "2025-06-20", progress: 100, dependencies: "10" },
    { id: "12", name: "ajustar tamaño logo y mejorar footer", start: "2025-06-21", end: "2025-06-22", progress: 100, dependencies: "11" },
    { id: "13", name: "pruebas de funcionabilidad y optimizar", start: "2025-06-23", end: "2025-06-28", progress: 0, dependencies: "12" },
    { id: "14", name: "configurar cloudflare, HTTPS,seguridad", start: "2025-06-29", end: "2025-07-01", progress: 100, dependencies: "13" },
    { id: "15", name: "pruebas finales y validacion con la clienta", start: "2025-07-02", end: "2025-07-04", progress: 0, dependencies: "" },
    { id: "16", name: "prueba final y capacitacion a la clienta", start: "2025-07-05", end: "2025-07-06", progress: 0, dependencies: "15" }
  ];

  const gantt = new Gantt("#gantt", tasks);
  