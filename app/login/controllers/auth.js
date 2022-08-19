const { response } = require('express');
const sequelize = require('../../database/conexiondb');
const bcrypt = require('bcryptjs');
const Usuarios = require('../../database/tablas/usuarios');

const { generarJWT } = require('../helpers/jwt');


const loginUsuario = async(req, res) => {
    const { email, password } = req.body;
    try {
        //validar al usuario o al correo
        const dbUser = await sequelize.query(
            "Select a.email, a.password,  a.name from usuarios a  where a.email = '" + email + "'; ", {
                type: sequelize.QueryTypes.SELECT
            });
        if (dbUser >= 0) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe',
                user: dbUser
            })
        }
        //validar contraseña
        const validPassword = bcrypt.compareSync(contrasena, dbUser[0].password);
        if (!validPassword) {
            return res.status(400).json({
                of: false,
                msg: 'El password no es valido'
            });
        }

        //creat JWT
        const token = await generarJWT(dbUser[0].name, email);

        return res.json({
            ok: true,
            msg: 'ruta login',
            email: dbUser[0].email,
            name: dbUser[0].name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}


const revalidarToken = async(req, res = response) => {
    const { name, email } = req;
    //Gwenerar token
    const token = await generarJWT(name, email);
    return res.json({
        ok: true,
        msg: 'Renew',
        name,
        email,
        token
    })

}


module.exports = {
    /* crearUsuario, */
    loginUsuario,
    revalidarToken,
   /*  cambiarPassword */
}