document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById('contenedor');

    // Función para obtener las películas desde la API
    async function obtenerPeliculas() {
        try {
            const response = await fetch('http://localhost/comision_24143/pruebaback/api.php');
            const peliculas = await response.json();
            mostrarPeliculas(peliculas);
        } catch (error) {
            console.error('Error al obtener las películas:', error);
        }
    }

    // Función para mostrar las películas en el contenedor
    function mostrarPeliculas(peliculas) {
        contenedor.innerHTML = '';
        peliculas.forEach(pelicula => {
            const peliculaElement = document.createElement('div');
            peliculaElement.className = 'pelicula';

            const imagen = document.createElement('img');
            imagen.src = pelicula.imagen;
            imagen.alt = pelicula.titulo;

            const titulo = document.createElement('h3');
            titulo.textContent = pelicula.titulo;

            const genero = document.createElement('p');
            genero.textContent = `Género: ${pelicula.genero}`;

            const duracion = document.createElement('p');
            duracion.textContent = `Duración: ${pelicula.duracion} mins`;

            const sinopsis = document.createElement('p');
            sinopsis.textContent = pelicula.sinopsis;

            peliculaElement.appendChild(imagen);
            peliculaElement.appendChild(titulo);
            peliculaElement.appendChild(genero);
            peliculaElement.appendChild(duracion);
            peliculaElement.appendChild(sinopsis);

            contenedor.appendChild(peliculaElement);
        });
    }

    // Llamar a la función para obtener y mostrar las películas al cargar la página
    obtenerPeliculas();
});
