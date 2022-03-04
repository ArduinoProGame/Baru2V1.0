//Ref: https://www.youtube.com/watch?v=VmH4tPbbDsM&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=7
//Deploy en heroku usando como repositorio Git.
//https://www.youtube.com/watch?v=6WcBSNxEow8&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6
const http = require('express');

require('dotenv').config();

const app = http();

const port = process.env.PORT || 3000;

//Conexion a Base de Datos
const mongo = require('mongoose');

/*Las credenciales de USER,PASSWORD y DBNAME las lee del archivo .env que esta en esta maquina
  Para que funcione al desplegar en heroku debemos estas mismas credenciales configurarlas en el
  hosting que es heroku para esto el archivo .env tiene que ser ignorado en .gitignore esto
  significa que cuando se despliega este proyecto en heroku las variables de entorno no son subidas
  al hosting y debemos estas mismas variables de .env configurarlas en heroku*/
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
/* Para paginas dinamicas que son aquellas que deben refrescarse despues de una consulta a base de datos
se usan las VISTAS(carpeta /views) y para esto se usan TEMPLATES ENGINES que son MOTORES DE PLANTILLAS consultar:
https://www.youtube.com/watch?v=1cHUZQFb4bo&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=8
Para renderizar la pagina se usa un framework EJS(Embedded Java Script) que es un motor de plantillas
EJS mezcla HTML con JS
*/

/*Middlewares es un concepto muy importante al desarrollar sobre Node.js, 
  la plataforma para utilizar a javascript en el lado del servidor.
  Un middleware es un bloque de código que se ejecuta entre la petición que hace
  el usuario (request) hasta que la petición llega al servidor.
  Los middelware siempres estan antes de las peticiones del cliente

  */
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
