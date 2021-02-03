const app = require('./Desarrollo/SOE/Fuentes/app')
const GlobalEnv = require('./Desarrollo/SOE/Fuentes/GlobalEnv')

app.listen(GlobalEnv.port, () => {
    console.log(`Servidor web escuchando en ${GlobalEnv.host}:${GlobalEnv.port}`)
})