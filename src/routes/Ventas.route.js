const {Router} = require("express")
const router = Router()
const VentasCtrl = require("../controllers/Ventas.controllers")
const Auth = require("../helper/Auth")

router.post("/crear",Auth.verificartoken,VentasCtrl.crear)
router.get("/listarventas",Auth.verificartoken, VentasCtrl.listar)
router.get("/listar/:id",Auth.verificartoken,VentasCtrl.listarid)
router.get("/listarventasjefe/:id",Auth.verificartoken,VentasCtrl.ventasdeunjefe)
router.delete("/delete/:id",Auth.verificartoken,VentasCtrl.eliminar)
router.put("/actualizar/:id",Auth.verificartoken,VentasCtrl.actualizar)
router.get("/buscar/:identificador",Auth.verificartoken,VentasCtrl.buscarventa)



module.exports = router