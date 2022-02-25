
const express = require('express');
const router = express.Router();
//el archivo mascotas es un archivo .ejs que esta en la carpeta views
router.get('/', (req,resp)=>{
    resp.render("mascotas", {
        arrayMascotas: [
            {id:'123', nombre:'Bony', descripcion:'Rescatado en Malecon'},
            {id:'456', nombre:'Chola', descripcion:'Rescatado en Sector 6 de Malecon'}
        ]
    })
})

module.exports = router;