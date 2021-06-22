/*
   Promesas
*/

function Promesas(bandera){
    return new Promise((resolve, reject) => {
            if (bandera) {
                setTimeout(() => {
                    resolve("Peteicion Resuelta");
                }, 3000);
            } else {
                setTimeout(() => {
                    reject("La operacion fallo")
                }, 2000);
            }
        
    })
}

// Promesas(false)
// .then((resultado) => {
//     console.log("Respuesta positiva", resultado)
// })
// .catch((error) => {
//     console.log("Error",error);
// })

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peteicion Resuelta");
        }, 3000);
    } else {
        setTimeout(() => {
            reject("La operacion fallo")
        }, 4000);
    }
})

// segundaPromesa(true)
// .then((respuesta) => {
//     console.log(respuesta);
// })
// .catch((error) => {
//     console.log(error);
// })

Promesas(true) // peticion de clientes
.then((respuesta) => { // respuesta de lista clientes
    console.log(respuesta);
    return segundaPromesa(true) // compras del cliente
})
.then((respuesta) => {
    console.log(respuesta); // respuesta de la segunda promesa
})
.catch((error) => {
    console.error(error);
})