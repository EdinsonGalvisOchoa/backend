const mongoose = require("mongoose");
const {Schema} = mongoose;

const VentaSchema = new Schema({
valortotalventa:String,
identificador:String,
cantidad:String,
preciounitarioporproducto:String,
fechaventa:String,
documentoidentificacioncliente:String,
nombrecliente:String,
vendedor:String,
estado:String

})

module.exports=mongoose.model('Venta',VentaSchema)