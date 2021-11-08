const VentasCtrl = {}
const Venta = require("../models/Ventas.model")

VentasCtrl.crear = async (req, res) => {
    const {valortotalventa, identificador, cantidad,preciounitarioporproducto,fechaventa,documentoidentificacioncliente,nombrecliente,vendedor,estado} = req.body;
    const NuevaVenta= new Venta({ valortotalventa, identificador, cantidad,preciounitarioporproducto,fechaventa,documentoidentificacioncliente,nombrecliente,vendedor, estado})

    const respuesta = await NuevaVenta.save()
    res.json({
        mensaje: "Venta creada",
        valortotalventa: NuevaVenta.valortotalventa,
        identificador: NuevaVenta.identificador,
        cantidad: NuevaVenta.cantidad,
        preciounitarioporproducto: NuevaVenta.preciounitarioporproducto,
        fechaventa: NuevaVenta.fechaventa,
        documentoidentificacioncliente: NuevaVenta.documentoidentificacioncliente,
        vendedor: NuevaVenta.vendedor,
        estado: NuevaVenta.estado,
        respuesta
    })
}

VentasCtrl.listar = async (req, res) => {
    const respuesta = await Venta.find()
    res.json(respuesta)
}

VentasCtrl.listarid = async (req, res) => {
    const id = req.params.id
    const respuesta = await Venta.findById({ _id: id })
    res.json(respuesta)
}
VentasCtrl.ventasdeunjefe = async (req, res) => {
    const id = req.params.id
    const respuesta = await Venta.find({ jefe: id })
    res.json(respuesta)
}

VentasCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Venta.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Venta eliminada",
        valortotalventa: Venta.valortotalventa,
        identificador: Venta.identificador,
        cantidad: Venta.cantidad,
        preciounitarioporproducto: Venta.preciounitarioporproducto,
        fechaventa: Venta.fechaventa,
        documentoidentificacioncliente: Venta.documentoidentificacioncliente,
        vendedor: Venta.vendedor,
        estado: Venta.estado,

    })

}

VentasCtrl.actualizar = async(req,res)=>{
    const id=req.params.id
    await Venta.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: "Venta actualizada",
        valortotalventa: Venta.valortotalventa,
        identificador: Venta.identificador,
        cantidad: Venta.cantidad,
        preciounitarioporproducto: Venta.preciounitarioporproducto,
        fechaventa: Venta.fechaventa,
        documentoidentificacioncliente: Venta.documentoidentificacioncliente,
        vendedor: Venta.vendedor,
        estado: Venta.estado,

    })


}
VentasCtrl.buscarventa=async (req,res)=>{
    const identificador =req.params.identificador
    const respuesta = await Venta.find({identificador: { $regex: ".*" + identificador + ".*" }});

    res.json(respuesta)

}


module.exports = VentasCtrl