var express = require('express');
var router = express.Router();
const habitacionesController = require("../controllers/habitacionesController");
const loginController = require("../controllers/loginController");
var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null,'./public/images/habitaciones/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, fecha + "_" + file.originalname);
    }
});

var cargar = multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/crearHabitacion', loginController.checkLoggedIn, habitacionesController.crear);
router.get('/:id',loginController.checkLoggedIn, habitacionesController.index);


//aqui recibo información desde crear
router.post("/", cargar.single("archivo") ,habitacionesController.guardar);

router.post('/eliminar/:id', loginController.checkLoggedIn, habitacionesController.eliminar);
router.get('/editarHabitacion/:id', loginController.checkLoggedIn, habitacionesController.editar);

router.post("/actualizar", loginController.checkLoggedIn, cargar.single("archivo") ,habitacionesController.actualizar);

module.exports = router;