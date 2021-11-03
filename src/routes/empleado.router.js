const {Router} = require("express")
const router = Router()
const EmpleadoCtrl = require("../controllers/Empleado.controllers")
const Auth = require("../helper/Auth")

router.post("/crear",Auth.verificartoken,EmpleadoCtrl.crear)
router.get("/listarempleados",Auth.verificartoken, EmpleadoCtrl.listar)
router.get("/listar/:id",Auth.verificartoken,EmpleadoCtrl.listarid)
router.get("/listarempleadosjefe/:id",Auth.verificartoken,EmpleadoCtrl.empleadosdeunjefe)
router.delete("/delete/:id",Auth.verificartoken,EmpleadoCtrl.eliminar)
router.put("/actualizar/:id",Auth.verificartoken,EmpleadoCtrl.actualizar)
router.get("/buscar/:nombres",Auth.verificartoken,EmpleadoCtrl.buscarempleado)



module.exports = router
