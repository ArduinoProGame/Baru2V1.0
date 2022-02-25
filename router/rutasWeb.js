//Ref: https://www.youtube.com/watch?v=bab8b2Ix4K0&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=14

const express = require('express');
const router = express.Router();


//Estas son nuestras RUTAS las 2 funciones GET
router.get('/', (req,resp)=>{
    //resp.send("Ningun request?.." + __dirname)
    /*Cuando el servidor responde y se esta usando EJS(motor de plantilla) 
      para hacer paginas dinamicas se usa el metodo render (suprimi send) para que la variable viaje
      desde el servidor a la pagina html en el browser   
    */
    resp.render('index', { titulo: 'valor de la variable titulo usando EJS'})
    /* render toma primer parametro el archivo a renderizar y segundo parametro lo que al archivo index
       que en este caso es un objeto, propiedad (titulo) y su valor. El archivo index.ejs para recibir este objeto 
       debe usar la plantilla EJS  <%= propiedad %> insertado en html 
    */
})
router.get('/servicios', (req,resp)=>{
    //resp.send("Esta en la pagina de servicios")
    resp.render('servicios', {tituloServicios: 'Nuevo Servicio WEB'})
})

module.exports = router;
