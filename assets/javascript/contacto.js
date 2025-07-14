document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;

    // Verificar honeypot (spam)
    if (form._honey.value !== "") {
      console.warn("Bot detectado");
      return;
    }

    const formData = new FormData(form);

    // Mostrar loader
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor espera.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    fetch("https://formsubmit.co/entreuvasycafe@gmail.com", { 
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarnos. Te responderemos pronto.',
          confirmButtonColor: '#3e1663'
        });
        form.reset();
      } else {
        throw new Error("Error en el envío");
      }
    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo enviar el mensaje. Inténtalo más tarde.',
        confirmButtonColor: '#d33'
      });
    });
  });