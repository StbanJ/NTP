// traemos el paquete
const { Router } = require("express");
const { User } = require("../lib/Schema/User");
const {DataValidator} = require("../middlewares/DataValidator")

// Inicializamos Router

const router = Router();

// creacion de los endpoints
router
  .get("/", (req, res) => {
    res.send("Hola mundo con ExpressJS");
  })
  .get("/saludo", DataValidator("query", User), (req, res) => {

    //console.log(req.query);
    const { query: {nombre, apellido} } = req;

    //const nombre = req.query.nombre;
    //const apellido = req.query.apellido;

    res.json({
        saludo: `Hola soy ${nombre} ${apellido}`
    });

})
//   .get("/saludo2", DataValidator("query", user), (req, res) => {
//     const { query: {nombre, apellido} } = req;
//     res.json({
//         saludo: `Hola soy ${nombre} ${apellido}`
//     });
// })

// Exportacion de los endpoints

module.exports.RouterIndex = router;

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
