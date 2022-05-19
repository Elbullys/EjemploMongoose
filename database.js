const mongoose = require('mongoose');

const CADENA_CONEXION = "mongodb://127.0.0.1:27017/ejemplo_mongoose_db";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
};

mongoose.connect(CADENA_CONEXION, options)
    .then(db => console.log("Conexión a BD exitosa"))
    .catch(err => console.log("No hay conexión con la BD: " + err));