const {Router} = require('express');
const router = Router();
const {
    renderListaProductos,
    renderCrudProductos
} = require('../controllers/productos.controller');

//======================================================
//  LISTA DE PRODUCTOS
//======================================================
router.get('/productos/listaProductos', renderListaProductos);

//======================================================
//  LISTA DE PRODUCTOS DEL CRUD
//======================================================
router.get('/productos', renderCrudProductos);


module.exports = router;