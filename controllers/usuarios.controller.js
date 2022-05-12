const usuariosController = {};

const DateOnly = require('dateonly');
const Usuario = require('../models/usuarios');

//======================================================
//  SIGNIN (INICIAR SESION)
//======================================================
usuariosController.renderSignIn = (req, res, next) => {
    res.render('signin', {layout: 'otro'});
}
usuariosController.signIn = (req, res, next) => {
    res.send('Datos recibidos: ' + req.body.email + ', ' + req.body.password);


}

//======================================================
//  SIGNUP (REGISTRAR USUARIO)
//======================================================
usuariosController.renderSignUp = (req, res, next) => {
    res.render('signup', {layout: 'otro'});
}
usuariosController.signUp = async (req, res, next) => {
    const {
        nombre, apellido_paterno, apellido_materno,
        fecha_nac, email, password, genero
    } = req.body;

    let fechaItems = fecha_nac.split('-');
    const fechaNac = new DateOnly(fechaItems[1]+'/'+fechaItems[2]+'/'+fechaItems[0]);

    const newUsuario = new Usuario(
        {
            nombre: nombre,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno || undefined,
            correo_electronico: email,
            contraseña: password,
            fecha_de_nac: fechaNac || undefined,
            genero: genero || undefined
        }
    );
    newUsuario.contraseña = await newUsuario.encryptPassword(password);
    await newUsuario.save()
    .then(usuarioRG => {
        res.send('Usuario guardado.');
    })
    .catch(err => {
        console.log(err);
        res.send('Ocurrio un error.');
    });
}

module.exports = usuariosController;