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
app.use(cors());// ORIGEN CRUZADO
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 5.4.- Servir directorios y configurar puerto
const port = process.env.PORT || "9002";
app.use("/", express.static(path.join(__dirname, "../public"))); // DIRECTORIO PUBLICO
app.get("/*", (req, res) => { res.sendFile(path.resolve(__dirname, "../public", "index.html")); });
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`MI SERVIDOR ESTA FUNCIONANDO PUERTO:${port}`));
// open(`http://localhost:${port}/api`);



