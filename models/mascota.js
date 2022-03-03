/*mascota.js es el schema (estructura) para importar los datos desde 
la base de datos de mongoDB. Para cada tabla(coleccion mongoose) debemos hacer este modelo
*/
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema(
    {
        nombre: String,
        descripcion: String
    }
)
//Creamos el modelo MascotaModel que es una coleccion(tabla de la base de datos)
const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;


