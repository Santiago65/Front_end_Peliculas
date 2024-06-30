document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://localhost/comision_24143/pruebaback/api.php';

    // Función para cargar las películas
    function loadPeliculas() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const tabla = document.querySelector('.tabla-modificadora tbody');
                tabla.innerHTML = ''; // Limpiar la tabla antes de llenarla de nuevo
                data.forEach(pelicula => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${pelicula.titulo}</td>
                        
                        
                        <td><img class="img-listado-peliculas" src="${pelicula.imagen}" alt="${pelicula.titulo}"></td>
                        <td>
                            <button class="btn-modificar" onclick="editPelicula(${pelicula.id})">Modificar</button>
                            
                            <button class="btn-eliminar" onclick="deletePelicula(${pelicula.id})">Eliminar</button>
                        </td>
                    `;
                    tabla.appendChild(tr);
                });
            });
    }

    // Agregar película
    document.querySelector('.input-submit').addEventListener('click', function (event) {
        event.preventDefault();
        const formData = new FormData(document.getElementById('formulario-gestor'));

        fetch(apiUrl, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                loadPeliculas();
            });
    });

    // Editar película
    window.editPelicula = function (id) {
        console.log(`Redirigiendo a editPeli.html con id=${id}`);
        window.location.href = `editPeli.html?id=${id}`;
    }

    // Eliminar película
    window.deletePelicula = function (id) {
        const confirmar = confirm("¿Estás seguro de que quieres eliminar esta película?");
        if (confirmar) {
            fetch(apiUrl, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ id })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                loadPeliculas();
            });
        }
    }

    loadPeliculas();
});
