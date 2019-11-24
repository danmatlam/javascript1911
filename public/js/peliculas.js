
async function obtenerPeliculas () {
    const url ='/api/peliculas';
    const respuesta = await fetch(url);
    if(respuesta.ok){
        let peliculas = await respuesta.json();
            peliculas = peliculas.data;  
            return peliculas 
    }
    return [];
}
obtenerPeliculas().then(data => {
    let lista = '';
    for(let i =0 ; i< data.length ; i++){
        lista = lista + `<li>${data[i].Title}</li>`;
    }
    document.getElementById("peliculas").innerHTML = `<ul>${lista}</ul>`;  
});

obtenerPeliculas().then(data => {
    let lista = '';
    for(let i =0 ; i< data.length ; i++){
        lista = lista + 
        `<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src=${data[i].Poster} class="ps-img  bd-placeholder-img card-img-top"/>
            <div class="card-body">
              <p class="card-text parrafo-principal">${data[i].Title}</p>
              <p class="card-text">Año: ${data[i].Year}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Elimar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        `;
    }
    document.getElementById("peliculas").innerHTML = `<div class="row">${lista}</div>`;  
});





function suma(a,b){
    return a+b;
}
const resultado = suma(20,8);



function guardarPelicula(event){
  event.preventDefault();
  let formData = {};
  $.each($('#formPeliculas').serializeArray(), function (i, field) {
    formData[field.name] = field.value;
  });
  formData;

}



