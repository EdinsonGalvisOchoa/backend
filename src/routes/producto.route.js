const {Router} = require("express")
const router = Router()
const ProductosCtrl = require("../controllers/Productos.controllers")
const Auth = require("../helper/Auth")

router.post("/crear",Auth.verificartoken,ProductosCtrl.crear)
router.get("/listarproductos",Auth.verificartoken, ProductosCtrl.listar)
router.get("/listar/:id",Auth.verificartoken,ProductosCtrl.listarid)
router.get("/listarproductosjefe/:id",Auth.verificartoken,ProductosCtrl.productosdeunjefe)
router.delete("/delete/:id",Auth.verificartoken,ProductosCtrl.eliminar)
router.put("/actualizar/:id",Auth.verificartoken,ProductosCtrl.actualizar)
router.get("/buscar/:descripcion",Auth.verificartoken,ProductosCtrl.buscarproducto)



module.exports = router