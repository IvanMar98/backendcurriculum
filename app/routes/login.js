const { check } = require('express-validator');
const { validarCampos } = require('../login/middelwares/validar-campos');
const { validarJWT } = require('../login/middelwares/validar-jwt');
const { loginUsuario, revalidarToken } = require('../login/controllers/auth');


module.exports = function (app) {

    app.post('/post/login', [

        check('email', 'Ml email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
        validarCampos
    ],
        loginUsuario);


    //Validar                               y revalidar token
    app.get('/get/renew', validarJWT, revalidarToken);
}







