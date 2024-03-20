/**
*En package.json se tuvo que realizar un cambio
*para ejecutar el console log de index.ts se quita:
*"test": "echo \"Error: no test specified\" && exit 1"
*para en su lugar agregar
*"dev": "ts-node-dev --respawn index.ts"
*se agrega el --respawn para que cada que se haga un cambio se vea en pantalla
*/

/*
*Se instala la extension de nombre Thunder Client en este se hace un 
new request donde pondremos la ruta en la que queremos que vaya http://localhost:3000/login en modo post y nos mostrara login que fue lo que pusimos en el codigo de index.ts:

import express from 'express'

const app = express();
app.post('/login',(req, res) =>{
    res.send("login");
});
app.listen(3000);
console.log('Server on port',3000);

Funcionan las consultas, aunque, falta conectarla a una base de datos.

*/

