//importamos libreria para verificar si el token es válido
const jwt = require('jsonwebtoken');

//====================
//Verificar TOKEN
//====================

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }
        //Asigno a la nueva propiedad usuario del request el valor del payload
        req.usuario = decoded.usuario
        next();

    });
}


//====================
//Verificar Admin Role
//====================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }

}



module.exports = {

    verificaToken,
    verificaAdmin_Role

}