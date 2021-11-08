const {Router} = require("express")
const router = Router()


const UsuarioCtrl = require("../controllers/Usuario.controllers")

router.post("/crear",UsuarioCtrl.crearUsuario)
router.post("/login",UsuarioCtrl.login)
router.get("/listar",UsuarioCtrl.listar)
router.get("/listar/:id",UsuarioCtrl.listarid)
router.delete("/delete/:id",UsuarioCtrl.eliminar)
router.put("/actualizar/:id",UsuarioCtrl.actualizar)
router.get("/buscar/:correo",UsuarioCtrl.buscarusuario)


module.exports = router
