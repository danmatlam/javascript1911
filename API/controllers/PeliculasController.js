

function getPeliculas(res) {

}

//Actuaizar y modficar
function savePeliculas(req, res) {

}


function deletePeliculas(req, res) {
    const datos = req.body;
    const indice = peliculas.findIndex(item => item.imdbID == datos.imdbID);
    console.log('poisicion:' + indice)
    peliculas.splice(indice, 1);
    res.send({ data: peliculas, status: 'succes' })
}

module.exports = {
    getPeliculas,
    savePeliculas,
    deletePeliculas
}