const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: "Capture su nombre.",
            minlength: [1, "La longitud mínima del nombre es de un caracter."],
            maxlength: [100,"El nombre tiene demasiados caracteres (máximo 100)."]
        },
        apellido_paterno: {
            type: String,
            required: "Capture su apellido paterno.",
            minlength: [1, "La longitud mínima del apellido paterno es de un caracter."],
            maxlength: [100,"El apellido paterno tiene demasiados caracteres (máximo 100)."]
        },
        apellido_materno: {
            type: String,
            required: false,
            minlength: [1, "La longitud mínima del apellido materno es de un caracter."],
            maxlength: [100,"El apellido materno tiene demasiados caracteres (máximo 100)."]
        },
        fecha_de_nac: Date,
        correo_electronico: String,
        contraseña: String,
        Genero: String,
        insertedAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
);

module.exports = mongoose.model("Usuario", usuariosSchema);