const {Router} = require('express');
const router = Router();
const {
    renderAdmin
} = require('../controllers/admin.controller');

//======================================================
//  SIGNIN (INICIAR SESION)
//======================================================
router.get('/admin', renderAdmin);

module.exports = router;
