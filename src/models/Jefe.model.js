const mongoose = require("mongoose");
const {Schema} = mongoose;

const JefeSchema = new Schema({
nombres:String,
correo:String,
contrasena:String

})

module.exports=mongoose.model('jefe',JefeSchema)