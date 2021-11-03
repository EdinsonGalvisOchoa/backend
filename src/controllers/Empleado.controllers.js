const EmpleadoCtrl = {}
const Empleado = require("../models/Usuario.model")

EmpleadoCtrl.crear = async (req, res) => {
    const { nombres, apellidos, identificacion, puesto, tcontrato, jefe } = req.body;
    const NuevoEmpleado = new Empleado({ nombres, apellidos, identificacion, puesto, tcontrato, jefe })

    const respuesta = await NuevoEmpleado.save()
    res.json({
        mensaje: "Empleado creado",
        nombres: NuevoEmpleado.nombres,
        apellidos: NuevoEmpleado.apellidos,
        respuesta
    })
}

EmpleadoCtrl.listar = async (req, res) => {
    const respuesta = await Empleado.find()
    res.json(respuesta)
}

EmpleadoCtrl.listarid = async (req, res) => {
    const id = req.params.id
    const respuesta = await Empleado.findById({ _id: id })
    res.json(respuesta)
}
EmpleadoCtrl.empleadosdeunjefe = async (req, res) => {
    const id = req.params.id
    const respuesta = await Empleado.find({ jefe: id })
    res.json(respuesta)
}

EmpleadoCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Empleado.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Empleado eliminado",
        nombres: Empleado.nombres,
        apellidos: Empleado.apellidos,

    })

}

EmpleadoCtrl.actualizar = async(req,res)=>{
    const id=req.params.id;
    await Empleado.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: "Empleado Actualizado",
        nombres: Empleado.nombres,
        apellidos: Empleado.apellidos,

    });


};
EmpleadoCtrl.buscarempleado =async (req,res)=>{
    const {nombres} = req.params;
    const respuesta = await Empleado.find({nombres: { $regex: ".*" +nombres + ".*"}});

    res.json(respuesta);

};


module.exports = EmpleadoCtrl
