const JefeCtrl = {}
const Jefe = require("../models/Jefe.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

JefeCtrl.crearJefe = async (req, res) => {
    const { nombres, correo, contrasena } = req.body;
    const NuevoJefe = new Jefe({ nombres, correo, contrasena })
    const correoJefe = await Jefe.findOne({ correo: correo })
    if (correoJefe) { res.json({ mensaje: "El correo ya existe" }) }
    else {
        NuevoJefe.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: NuevoJefe._id }, "secreta")
        await NuevoJefe.save()
        res.json({
            mensaje: "Bienvenido",
            id: NuevoJefe._id,
            nombres: NuevoJefe.nombres,
            token
        })
    }


}


JefeCtrl.login = async (req, res) => {
    const { correo, contrasena } = req.body;
    const jefe = await Jefe.findOne({ correo: correo })
    if (!jefe) {
        return res.json({
            mensaje: "correo incorrecto"
        })
    }
    const match = await bcrypt.compare(contrasena, jefe.contrasena)
    if (match) {
        const token = jwt.sign({ _id: jefe._id }, "secreta")
        res.json({
            mensaje: "Bienvenido",
            id: jefe._id,
            nombre: jefe.nombres,
            token

        })
    } else {
        res.json({
            mensaje: "contrasena incorrecta"
        })
    }
}
JefeCtrl.listar = async (req, res) => {
    const respuesta = await Jefe.find()
    res.json(respuesta)
}

module.exports = JefeCtrl