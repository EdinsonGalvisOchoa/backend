const {Router} = require("express")
const router = Router()
const JefeCtrl = require("../controllers/Jefe.controles")

router.post("/crear",JefeCtrl.crearJefe)
router.post("/login",JefeCtrl.login)
router.get("/listar",JefeCtrl.listar)


module.exports = router
