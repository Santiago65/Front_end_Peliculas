  // Selecciona el botón de "Agregar Películas"
  const submitButton = document.querySelector('.input-submit');
        
  // Agrega un evento de clic al botón
  submitButton.addEventListener('click', function(event) {
      // Previene el comportamiento por defecto del botón de submit
      event.preventDefault();
      
      // Selecciona todos los campos de entrada y el textarea
      const inputs = document.querySelectorAll('.input-gestor');
      const textarea = document.querySelector('.textarea');
      let allFilled = true;
      
      // Recorre todos los campos para verificar si están llenos
      inputs.forEach(input => {
          if (input.value.trim() === '') {
              allFilled = false;
          }
      });
      
      // Verifica también el textarea
      if (textarea.value.trim() === '' || textarea.value.trim() === 'Sinopsis:') {
          allFilled = false;
      }
      
      // Si todos los campos están llenos, procede a agregar la película
      if (allFilled) {
          alert('Película agregada correctamente!');
          // Aquí puedes agregar la lógica para realmente agregar la película
      } else {
          alert('Por favor, complete todos los campos.');
      }
  });