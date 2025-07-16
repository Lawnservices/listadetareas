  setTimeout(() => {
      console.log('%c¡Detente!', 'font-size: 40px; color: red; font-weight: bold;');
      console.log('%cEsta función del navegador está pensada para desarrolladores. Si alguien te indicó que copiaras y pegaras algo aquí para "activar funciones" o "hackear" algo, es un fraude. ¡No lo hagas!', 'font-size: 18px; color:red;');
   
      console.log('%cConsulta:  https://listadetareas.com/ para obtener más información.', 'font-size: 18px; color:#fff;');
    }, 1000);

    const fecha = new Date();
    console.log('%Inicializado el sitio de Miguel Lawn Services el: ' + fecha.toString());