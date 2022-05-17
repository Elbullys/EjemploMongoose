const productosController = {};

const productosSchema = require('../models/productos');

//======================================================
//  LISTA DE PRODUCTOS
//======================================================
productosController.renderListaProductos = async (req, res, next) => {
    
    await productosSchema.find({})
        .then(productos => {
            res.render('./productos/listaProductos', 
            {
                layout: 'main',
                productos: productos
            });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

//======================================================
//  LISTA DE PRODUCTOS CRUD
//======================================================
productosController.renderCrudProductos = async (req, res, next) => {
    
    await productosSchema.find({})
        .then(productos => {
            res.render('./productos/crudProductos', 
            {
                layout: 'main',
                productos: productos
            });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

module.exports = productosController;