const productosController = {};

const Producto = require('../models/productos');

//======================================================
//  LISTA DE PRODUCTOS
//======================================================
productosController.renderListaProductos = async (req, res, next) => {
    
    await Producto.find({})
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
    
    await Producto.find({})
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

//======================================================
//  NUEVO PRODUCTO
//======================================================
productosController.newProducto = async (req, res, next) => {
    const {
        descripcion, precio, cantidad
    } = req.body;

    const newProducto = new Producto(
        {
            descripcion: descripcion,
            precio: precio || undefined,
            cantidad: cantidad || undefined,
        }
    );

    await newProducto.save()
    .then(producto => {
        res.redirect('/productos');
    })
    .catch(err => {
        console.log(err);
        res.status(400).redirect('/');
    });
}

//======================================================
//  EDITAR PRODUCTO
//======================================================
productosController.renderEditProducto = async (req, res, next) => {
    
    var _id = req.params.id;

    await Producto.findById(_id)
        .then(producto => {
            res.render('./productos/editProducto', 
            {
                layout: 'main',
                producto: producto
            });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}
productosController.updateProducto = async (req, res, next) => {
    
    var _id = req.params.id;

    const {
        descripcion: newDescripcion, 
        precio: newPrecio, 
        cantidad: newCantidad
    } = req.body;

    await Producto.findByIdAndUpdate(
            _id,
            {
                descripcion: newDescripcion,
                precio: newPrecio,
                cantidad: newCantidad,
            }
        )
        .then(producto => {
            res.redirect('/productos');
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

//======================================================
//  ELIMINAR PRODUCTO
//======================================================
productosController.deleteProducto = async (req, res, next) => {
    
    var _id = req.params.id;

    await Producto.findByIdAndDelete(
            _id
        )
        .then(producto => {
            res.redirect('/productos');
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

module.exports = productosController;