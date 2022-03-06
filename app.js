//Ref: https://www.youtube.com/watch?v=VmH4tPbbDsM&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=7
//Deploy en heroku usando como repositorio Git.
//https://www.youtube.com/watch?v=6WcBSNxEow8&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6
const http = require('express');

require('dotenv').config();

const app = http();

const port = process.env.PORT || 3000;

//Conexion a Base de Datos
const mongo = require('mongoose');

const uri= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gzlj2.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
//bQffatxgzNeLCSEZ
mongo.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>console.log("Base de dato conectada"))
.catch(e=>console.log(e))

app.set('view engine', 'ejs'); //Le dice que motor de plantilla va a usar la app
app.set('views', __dirname + '/views') //Le dice que las vistas(views) o archivos dinamicos estaran en la carpeta views
//_dirname es la ruta del servidor donde estan app.js, package.json. Es importante este _dirname por que cuando
//la pagina se aloje en un hosting no se perdera d ela rura del servidor.
app.use(http.static(__dirname + '/public')); //Esta es la ruta de archivos estaticos(carpeta public) que son las paginas html, CSS y codigo script

//Las rutas que estaban inicialmete aqui se pasaron a la carpeta router archivo rutasWeb.js

app.use('/', require('./router/rutasWeb'));
//Llamamos a nuestro archivo de mascotas
app.use('/baru2', require('./router/Mascotas'));

//Middelware: es una funcion que se ejecuta cuando la ruta o recurso que pide el cliente no se encuentra
app.use((req,resp,next) =>{
    //resp.status(404).sendFile(__dirname + '/public/404.html')
    resp.status(404).render('404', {
        titulo: 'Error',
        descripcion: 'No se encontro el recurso'
    })
})

app.listen(port, ()=>{
    console.log("Listo en puerto " + port)
})
