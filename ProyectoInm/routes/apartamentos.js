var express = require('express');
var router = express.Router();
const apartamentosController = require("../controllers/apartamentosController");
const loginController = require("../controllers/loginController");
var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null,'./public/images/apartamentos/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, fecha + "_" + file.originalname);
    }
});

var cargar = multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/',loginController.checkLoggedIn, apartamentosController.index);
router.get('/crear', loginController.checkLoggedIn, apartamentosController.crear);

//aqui recibo información desde crear
router.post("/", cargar.single("archivo") ,apartamentosController.guardar);

router.post('/eliminar/:id', loginController.checkLoggedIn, apartamentosController.eliminar);
router.get('/editarApartamento/:id', loginController.checkLoggedIn, apartamentosController.editar);

router.post("/actualizar", loginController.checkLoggedIn, cargar.single("archivo") ,apartamentosController.actualizar);

module.exports = router;