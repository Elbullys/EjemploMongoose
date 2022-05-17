const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema(
    {
        descripcion: {
            type: String,
            required: "Capture una descripción del producto.",
            minlength: [1, "La longitud mínima de la descripción del producto es de un caracter."],
            maxlength: [200,"La descripción del producto tiene demasiados caracteres (máximo 200)."]
        },
        precio:{
            type: Number,
            min: [0, "El precio debe ser mayor o igual a cero."]
        },
        cantidad:{
            type: Number,
            min: [0, "La cantidad debe ser mayor o igual a cero."]
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Producto", productosSchema);