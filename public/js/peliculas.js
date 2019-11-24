
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
const peliculas = obtenerPeliculas();
debugger;


function suma(a,b){
    return a+b;
}
const resultado = suma(20,8);



