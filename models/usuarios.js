const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const DateOnly = require('mongoose-dateonly')(mongoose);

let posibles_valores_sex = ["Mujer","Hombre", "Otro", "Prefiero no decirlo"];
let email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Coloca un correo electrónico válido"];

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
        fecha_de_nac: DateOnly,
        correo_electronico: {
            type: String, 
            required: "Capture su correo electrónico.",
            match: email_match,
            unique: true,
            index: true
        },
        contraseña: {
            type: String,
            required: "Capture su contraseña.", 
            minlength:[3,"La contraseña debe tener al menos 3 caracteres."]
        },
        genero: {
            type: String, 
            enum: {
                values: posibles_valores_sex,
                message: "Opción no válida (Género)."
            }
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true,
    }
);

usuariosSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

usuariosSchema.methods.matchPassword = async function (password){
    //Se utiliza una function en ES6 para acceder a la instancia actual
    return await bcrypt.compare(password, this.contraseña);
};

module.exports = mongoose.model("Usuario", usuariosSchema);