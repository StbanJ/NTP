const express = require("express");

// genero una aplicacion express
const app = express();
// EndPoint
app.get("/", (req, res) => {
  res.send("Hola mundo con ExpressJs");
});

app.get("/saludo", (req, res) => {
  // req.query
  //console.log(req.query);
  // obtenemos la query del objeto request
  const { query } = req;
  // const nombre = req.query.nombre
  // const apellido = req.query.apellido

  res.json({
    saludo: `Hola soy ${query.nombre} ${query.apellido}`,
  });
});

app.get("/saludo/:nombre/", (req, res) => {
  const {
    params: { nombre },
  } = req;
  
  res.json({
    nombre: nombre,
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
