 class Usuario {
    
    constructor(user){
        this.nombre = user.nombre,
        this.email = user.email,
        this.password = user.password,
        this.createAt = user.createAt || new Date()
    }
}
module.exports = Usuario