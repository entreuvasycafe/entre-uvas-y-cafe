
document.getElementById('enviar').addEventListener('click', function () {
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;

    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);

    var texto = `¡Hola!, me llamo ${nombre}, quería consultar ${mensaje}`;
    var url = `https://wa.me/56984230531?text=${texto}`;

    console.log('URL:', url);

    window.open(url, '_blank');
});