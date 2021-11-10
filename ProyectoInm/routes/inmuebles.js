var express = require('express');
var router = express.Router();
const inmueblesController = require("../controllers/InmueblesController");
const loginController = require("../controllers/loginController");
var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null,'./public/images/inmuebles/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, fecha + "_" + file.originalname);
    }
});
let userIdL;
var cargar = multer({storage:rutaAlmacen});



/* GET home page. */
router.get('/crear', loginController.checkLoggedIn, inmueblesController.crear);
router.get('/:id',loginController.checkLoggedIn, inmueblesController.index);


//aqui recibo información desde crear
router.post("/", cargar.single("archivo") ,inmueblesController.guardar);

router.post('/eliminar/:id', loginController.checkLoggedIn, inmueblesController.eliminar);
router.get('/editar/:id', loginController.checkLoggedIn, inmueblesController.editar);

router.post("/actualizar", loginController.checkLoggedIn, cargar.single("archivo") ,inmueblesController.actualizar);

module.exports = router;