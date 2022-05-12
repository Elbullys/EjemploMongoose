const {Router} = require('express');
const router = Router();
const {
    renderSignIn,
    signIn,
    renderSignUp,
    signUp
} = require('../controllers/usuarios.controller');

//======================================================
//  SIGNIN (INICIAR SESION)
//======================================================
router.get('/signin', renderSignIn);
router.post('/signin', signIn);

//======================================================
//  SIGNUP (REGISTRAR USUARIO)
//======================================================
router.get('/signup', renderSignUp);
router.post('/signup', signUp);

module.exports = router;