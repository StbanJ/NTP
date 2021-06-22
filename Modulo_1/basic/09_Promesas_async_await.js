/* 
   async - await
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

(async () => {
    try {
        var respuesta = await Promesas(true)
        var respuesta2 = await Promesas(true)
        console.log(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.log(error);
    }
})()