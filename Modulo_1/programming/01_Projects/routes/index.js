// traemos el paquete
const {Router} = require('express');

// Inicializamos Router

const router = Router()

// creacion de los endpoints
router
    .get("/", (req, res) => {
        res.send("Hola mundo con ExpressJs");
    })
    .get("/saludo",(req, res) => {

        //console.log(req.query);
        const { query: {nombre, apellido} } = req;
    
        //const nombre = req.query.nombre;
        //const apellido = req.query.apellido;
    
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`
        });
    
    })
    .get('/saludo/:nombre', (req, res) => {

        const { params: {nombre} } = req;
        res.json({
            nombre: nombre
        })
    });


// Exportacion de los endpoints

module.exports.RouterIndex = router


// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
