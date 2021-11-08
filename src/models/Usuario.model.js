const mongoose = require("mongoose");
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
nombres:String,
rol:String,
correo:String,
contrasena:String,
estado:String

})

module.exports=mongoose.model('usuario',UsuarioSchema)