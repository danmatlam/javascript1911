// 5.- Configurar servidor
// 5.1.- Crear archivo index.js en /servidor
// 5.2.- Importar dependencias
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require("http");
const process = require("process");
const path = require("path");
const open = require("open");

// 5.3.- Configurar servidor y body parser
const app = express(); // CREAR SERVIDOR
app.use(cors());// ORIGEN CRUZADO;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//////



/// AQUI CODIFICAMOS

let peliculas = [
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "1",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "2",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Batman",
    "Year": "1989",
    "imdbID": "3",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
  },
  {
    "Title": "Batman Returns",
    "Year": "1992",
    "imdbID": "4",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
  },
  {
    "Title": "Batman Forever",
    "Year": "1995",
    "imdbID": "5",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Batman & Robin",
    "Year": "1997",
    "imdbID": "6",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
  },
  {
    "Title": "The Lego Batman Movie",
    "Year": "2017",
    "imdbID": "7",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
  },
  {
    "Title": "Batman: The Animated Series",
    "Year": "1992–1995",
    "imdbID": "8",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
  },
  {
    "Title": "Batman: Under the Red Hood",
    "Year": "2010",
    "imdbID": "9",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Batman: The Dark Knight Returns, Part 1",
    "Year": "2012",
    "imdbID": "10",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
  },

];
let longitud = peliculas.length;

app.get('/api', (req, res) => {
  res.send(
    {
      texto: 'hola',
      status: 'succes'
    }
  )
});
const suma = require('./test').suma;
app.post('/api/suma', (req, res) => {
  const datos = req.body;
  const resultado = suma(
    datos.valorTotal,
    datos.iva
  );
  res.send({
    respuesta: resultado
  });
});


const PeliculasController = require('./controllers/PeliculasController');
app.get(
  '/api/peliculas', (req, res) => {
    res.send(
      {
        data: peliculas,
        status: 'succes'
      }
    )
  });
app.post(
  '/api/peliculas', (req, res) => {
    const datos = req.body;
    console.log(datos)
    if (datos.imdbID != '') {
      //Modificarlo
      console.log('modificcar')
      const pelicula = {
        "Title": datos.Title,
        "Year": datos.Year,
        "imdbID": datos.imdbID,
        "Type": datos.Type,
        "Poster": datos.Poster
      }
      const indice = peliculas.findIndex(item => item.imdbID == datos.imdbID);
      peliculas[indice] = pelicula;
      res.send(
        {
          data: peliculas,
          status: 'succes'
        }
      )
    } else {
      //Crearlo
      console.log('crear')
      const pelicula = {
        "Title": datos.Title,
        "Year": datos.Year,
        "imdbID": 99999,
        "Type": datos.Type,
        "Poster": datos.Poster
      }
      peliculas.push(pelicula);
      res.send({ data: peliculas, status: 'succes' }
      )
    }

    console.log(peliculas);


  });
app.delete(
  '/api/peliculas', (req, res) => {
    PeliculasController.deletePeliculas(req, res);
  });


const ClientesController = require('./controllers/ClientesControllers');
app.get("/api/clientes", (req, res) => {
  ClientesController.getClientes(res)
});
app.post("/api/clientes", (req, res) => {
  ClientesController.SaveCliente(req, res)
})
app.put("/api/clientes", (req, res) => {
  ClientesController.updateCliente(req, res)
})








/// AQUI TERMINAMOS




// 5.4.- Servir directorios y configurar puerto
const port = process.env.PORT || "9002";
app.use("/", express.static(path.join(__dirname, "../public"))); // PAGINA WEB
app.get("/*", (req, res) => { res.sendFile(path.resolve(__dirname, "../public", "index.html")); });
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`MI SERVIDOR ESTA FUNCIONANDO PUERTO:${port}`));
// open(`http://localhost:${port}/api`);



