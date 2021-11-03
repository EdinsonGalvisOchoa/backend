const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProductoSchema = new Schema({
descripcion:String,
valorunitario:String,
estado:String,


})

module.exports=mongoose.model('Producto',ProductoSchema)