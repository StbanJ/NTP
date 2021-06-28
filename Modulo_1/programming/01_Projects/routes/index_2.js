const { Router } = require("express");

const data = require("../data.json");

const router = Router();

router
  .get("/users", (req, res) => {
    res.send(
      res.json({
        msg: "1er path/user",
        body: [
          data.map((datos) => {
            datos.first_name = datos.first_name.toUpperCase();
            datos.last_name = datos.last_name.toUpperCase();
            return datos;
          }),
        ],
      })
    );
  })
  .get("/users-query", (req, res) => {
    const {
      query: { id },
    } = req;
    var filtro = data.filter((data) => data.id == id);
    if (id != null) {
      res.json({
        msg: "2do Filtrar al usuario por medio del id",
        body: [filtro],
      });
    } else {
      res.json({
        msg: "Lista de Personas Completa",
        body: [data],
      });
    }
  })
  .get("/users-params/:apellido", (req, res) => {
    const { params } = req;
    var desc = data.filter((data) => data.last_name == params.apellido);
    var email = desc.map((extraer) => {
      return extraer.email;
    });
    var bandera = false;
    data.forEach((validar) => {
      if (validar.last_name === params.apellido) {
        bandera = true;
      }
    });
    if (bandera == true) {
      res.json({
        msg: "3er path params correo",
        body: [{ correo: email }],
      });
    } else {
      res.json({
        msg: "No se encuentra el apellido",
        body: [],
      });
    }
  });
module.exports.RouterIndex = router;
