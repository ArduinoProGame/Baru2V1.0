
const express = require('express');
const router = express.Router();
//el archivo mascotas es un archivo .ejs que esta en la carpeta views

//Importamos el modelo MascotaModel

const Mascota = require('../models/mascota');

router.get('/', async(req,resp)=>{
     

    try{
        const arrayMascotasDB= await Mascota.find() //el metodo find() de Model trae la informacion de la base de datos
        //console.log(arrayMascotasDB); 
        resp.render("mascotas", {
            arrayMascotas: arrayMascotasDB // arrayMascotas es la propiedad y arrayMascotasDB es el valor que es un objeto
        })   
    }

    catch (error) {
        console.log(error)

    }

    
})

module.exports = router;