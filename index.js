import express from 'express';
import cors from 'cors';

// Cargar las variables del entorno
import dotenv from 'dotenv';
dotenv.config();


// Importar las rutas
import categoriasRouter from './routes/categorias/categoriasRoutes.js';

// Crear la app de express
const app = express();

// Habilitar la captura de datos mediante post /formularios
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurar CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'content-Type.Authorization',
    exposedHeaders: 'content-length,X-Knowlwdge',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204

};
//Apply CORS middleware globally
app.use(cors(corsOptions));

// configuracion de puerto
const port= 3000;

//uso de rutas
app.use('/categorias', categoriasRouter);//Notas

//levantar el servidor en el puerto 3000
app.listen(port,()=> {
    console.log(`servidor corriendo en el puerto ${port}`);
});