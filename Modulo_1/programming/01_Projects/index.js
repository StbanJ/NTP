const express = require("express");

// genero una aplicacion express
const app = express();

// routes

const { RouterIndex } = require("./routes/index_2");

app.use("/deber-video", RouterIndex);

// app.use("/user",RouterIndex)
// app.use("/user/data",RouterIndex)

/*
  "/" + "/" = "//" => "/"
  "/" + "/saludo" = "//saludo" => "/saludo"
  "/" + "/saludo/:nombre" => "/saludo/:nombre"

  "/user" + "/" "//" => "/"
  "/user" + "/saludo" = "/user/saludo"
  "/user/data" + "/saludo" = "/user/data/saludo"
*/

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
