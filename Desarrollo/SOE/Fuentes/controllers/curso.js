const Curso = require('../models/Curso');
const dbConnection = require('../connect');
const connection = dbConnection();

userOperation = function (req, res) {
    const command = req.body.command
    console.log("hate every");
    console.log(req.body);
    switch (command) {
        case 'REGISTER_CURSO':
            registerCourse(req, res)
            break
        default:
            return res
                .status(500)
                .send({
                    status: 'ERROR',
                    message: 'No se ha encontrado la operación en CURSO'
                })
    }
}

function registerCourse(req, res) {
    const curso = req.body.transaction
    const newCurso = new Curso(curso)

        console.log(req.body.transaction);
        connection.connect()
        connection.query(
            'INSERT INTO curso values(?,?,?,?)',
            [newCurso.id, newCurso.nombre_curso, newCurso.id_usuario, newCurso.descripcion],
            (err, result) => {
            if (err) {
                return res
                    .status(200)
                    .send({
                        status: 'FAILED',
                        message: err
                    })
            } else {
                return res
                    .status(200)
                    .send({
                        status: 'SUCCESS',
                        message: 'Curso registrado correctamente'
                    })
            }
        }) 
        connection.end()
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
    
}
module.exports = userOperation