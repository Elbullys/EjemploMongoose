const {Router} = require('express');
const router = Router();
const {
    renderListaProductos,
    renderCrudProductos,
    renderEditProducto,
    updateProducto,
    deleteProducto,
    newProducto,
} = require('../controllers/productos.controller');

//======================================================
//  LISTA DE PRODUCTOS
//======================================================
router.get('/productos/listaProductos', renderListaProductos);

//======================================================
//  LISTA DE PRODUCTOS DEL CRUD
//======================================================
router.get('/productos', renderCrudProductos);

//======================================================
//  NUEVO UN PRODUCTO
//======================================================
router.post('/productos/new', newProducto);

//======================================================
//  EDITAR UN PRODUCTO
//======================================================
router.get('/productos/edit/:id', renderEditProducto);
router.put('/productos/edit/:id', updateProducto);

//======================================================
//  ELIMINAR UN PRODUCTO
//======================================================
router.delete('/productos/delete/:id', deleteProducto);

module.exports = router;