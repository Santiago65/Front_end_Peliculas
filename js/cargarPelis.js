
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost/comision_24143/pruebaback/api.php')
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById('contenedor');
            contenedor.innerHTML = '';
            data.forEach(pelicula => {
                const div = document.createElement('div');
                div.className = 'pelicula';
                div.innerHTML = `
                   
                   
                    <img class="img-peliculas" src="${pelicula.imagen}" alt="${pelicula.titulo}" />
                     <h4 class="titulo-pelicula">${pelicula.titulo}</h4>
                `;
                contenedor.appendChild(div);
            });
        });
});

// <p>${pelicula.genero}</p>
//<p>${pelicula.duracion}</p>
//<p>${pelicula.sinopsis}</p>
// let pagina = 1;

// const btnAnterior = document.getElementById('btn-anterior');
// const btnSiguiente = document.getElementById('btn-siguiente');

// btnSiguiente.addEventListener('click', () => {
//     if(pagina < 1000){
//         pagina += 1;
//         cargarPeliculas();
//     }
// });
// btnAnterior.addEventListener('click', () => {
//     if(pagina > 1){
//         pagina -= 1;
//         cargarPeliculas();
//     }
// });

// const cargarPeliculas = async () => {
//     try {
//         const respuesta = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=98c868e5f41b46b9dfca5a2c19ee885e&language=es-ES&page=${pagina}`);
           
//             if (respuesta.status === 200){
//                 const datos = await respuesta.json();

//                 let peliculas = "";

//                 datos.results.forEach(pelicula => {
//                     peliculas += 
                    
//                  `<div class="seccion-tendencias">
//                     <div class="container-peliculas">
//                        <a href="../pages/detalle.html">
     
//                             <img class="img-peliculas" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
//                         </a>
//                     </div>
//                         <h4 class="titulo-pelicula">${pelicula.title}</h4>
//                  </div> `;

//                 });
//                 document.getElementById('contenedor').innerHTML = peliculas;
//             }else if (respuesta.status === 401){
//                 console.log('El api key es erróneo');
//             }else if (respuesta.status === 404){
//                 console.log('la película no existe');
//             }else{
//                 console.log('algo pasó'); 
//             }
        
//     }catch(error){
//             console.log(error); 
//     }
// };
// cargarPeliculas ();
