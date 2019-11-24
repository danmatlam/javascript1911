
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





function suma(a,b){
    return a+b;
}
const resultado = suma(20,8);



