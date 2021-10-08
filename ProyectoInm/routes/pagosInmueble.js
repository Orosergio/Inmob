var express = require('express');
var router = express.Router();
const pagosInmuebleController = require("../controllers/pagosInmuebleController");

var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage(
    {
    destination:function (request, file, callback) {
        callback(null, './public/images/boletasPago/')
    },
    filename:function (request, file, callback) {
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
    }
);

var cargar = multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/', pagosInmuebleController.index);
router.get('/crearPago', pagosInmuebleController.crearPago);
router.post("/",cargar.single("archivo"), pagosInmuebleController.guardar);

router.post('/eliminar/:id',pagosInmuebleController.eliminar);

router.get('/editar/:id',pagosInmuebleController.editar);

router.post("/actualizar",cargar.single("archivo"), pagosInmuebleController.actualizar);

module.exports = router;