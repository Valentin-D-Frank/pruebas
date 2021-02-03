const Usuario = require("../models/Usuarios");
const bcrypt = require("bcrypt");
const dbConnection = require("../connect");
const connection = dbConnection();

userOperation = function(req, res) {
    const command = req.body.command;
    switch (command) {
        case "REGISTER_USER":
            registerUser(req, res);
            break;
        default:
            return res.status(500).send({
                status: "ERROR",
                message: "No se ha encontrado la operación",
            });
    }
};

function registerUser(req, res) {
    const user = req.body.transaction;
    const saltRounds = 10;
    const newUsuario = new Usuario(user);
    bcrypt.hash(newUsuario.password, saltRounds).then((hash) => {
        connection.connect();
        connection.query(
            "INSERT INTO usuario values(?,?,?,?)", [
                newUsuario.nombre,
                newUsuario.email,
                newUsuario.password,
                newUsuario.createAt,
            ],
            (err, result) => {
                if (err) {
                    return res.status(200).send({
                        status: "FAILED",
                        message: err,
                    });
                } else {
                    return res.status(200).send({
                        status: "SUCCESS",
                        message: "Usuario registrado correctamente",
                    });
                }
            }
        );
        connection.end();
        /*.then((res) => {
                                    return res
                                        .status(200)
                                        .send({
                                            status: 'SUCCESS',
                                            message: 'Usuario registrado correctamente'
                                        })
                                })
                                .catch((err) => {
                                    return res
                                        .status(200)
                                        .send({
                                            status: 'FAILED',
                                            message: err
                                        })

                                })*/
    });
}
module.exports = userOperation;