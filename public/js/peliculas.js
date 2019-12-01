function genericRedibujar(payload){
  let lista = '';
  for(let i =0 ; i< payload.length ; i++){
      lista = lista + 
      `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${payload[i].Poster} class="ps-img  bd-placeholder-img card-img-top"/>
          <div class="card-body">
            <p class="card-text parrafo-principal">${payload[i].Title}</p>
            <p class="card-text">Año: ${payload[i].Year}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" onClick="eliminar(${payload[i].imdbID}) >Elimar</button>
                <button type="button" class="btn btn-sm btn-outline-secondary" onClick="editar(${payload[i].imdbID})">Editar</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div
      `;
  }a
  document.getElementById("peliculas").innerHTML = `<div class="row">${lista}</div>`;  
};


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
  genericRedibujar(data);
});


async function _guardarPelicula (payload) {
  const url ='/api/peliculas';
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(payload)
    });
    const result = await response.json();
    return result;
}
function guardarPelicula(event){
  event.preventDefault();
  let pelicula = {};
  $.each($('#formPeliculas').serializeArray(), function (i, field) {
    pelicula[field.name] = field.value;
  });


  _guardarPelicula(pelicula).then(data => {
    debugger
    let lista = '';
    if(data.status){
      genericRedibujar(data.data); 
    }
    
  });
}


function editar(id) {
  alert('test');
}



