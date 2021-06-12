const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/connection');


// Importamos variables
dotenv.config({path:'config.env'})
const PORT = process.env.PORT;

// Levantamos el servidor
const app = express();

// Habilitamos json
app.use(express.json());

// Conexión a MongoDB
connectDB();

// CORS Middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
next();
});

// Importamos las rutas
app.use('/', require('./routes/router'))



// Iniciando el servidor
app.listen(PORT, function(){
    console.log(`Servidor excuchando por el puerto ${PORT}`);
});