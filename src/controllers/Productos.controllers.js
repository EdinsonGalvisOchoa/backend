const ProductosCtrl = {}
const Producto = require("../models/Productos.model")

ProductosCtrl.crear = async (req, res) => {
    const { descripcion, valorunitario, estado} = req.body;
    const NuevoProducto = new Producto({ descripcion, valorunitario, estado})

    const respuesta = await NuevoProducto.save()
    res.json({
        mensaje: "Producto creado",
        descripcion: NuevoProducto.descripcion,
        valorunitario: NuevoProducto.valorunitario,
        estado: NuevoProducto.estado,
        respuesta
    })
}

ProductosCtrl.listar = async (req, res) => {
    const respuesta = await Producto.find()
    res.json(respuesta)
}

ProductosCtrl.listarid = async (req, res) => {
    const id = req.params.id
    const respuesta = await Producto.findById({ _id: id })
    res.json(respuesta)
}
ProductosCtrl.productosdeunjefe = async (req, res) => {
    const id = req.params.id
    const respuesta = await Producto.find({ jefe: id })
    res.json(respuesta)
}

ProductosCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Producto.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Producto eliminado",
        descripcion: Producto.descripcion,
        valorunitario: Producto.valorunitario,
        estado: Producto.estado

    })

}

ProductosCtrl.actualizar = async(req,res)=>{
    const id=req.params.id
    await Producto.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: "Producto Actualizado",
        descripcion: Producto.descripcion,
        valorunitario: Producto.valorunitario,
        estado: Producto.estado

    })


}
ProductosCtrl.buscarproducto =async (req,res)=>{
    const {descripcion} =req.params
    const respuesta = await Producto.find({descripcion: { $regex: ".*" + descripcion + ".*" }});

    res.json(respuesta)

}


module.exports = ProductosCtrl
