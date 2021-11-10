var express = require('express');
var router = express.Router();
const anunciosController = require("../controllers/anunciosController");
const loginController = require("../controllers/loginController");

var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage(
    {
    destination:function (request, file, callback) {
        callback(null, './public/images/anuncios/')
    },
    filename:function (request, file, callback) {
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
    }
);

var cargar = multer({storage:rutaAlmacen});

router.get('/crearanuncio', loginController.checkLoggedIn, anunciosController.crear);
router.get('/', loginController.checkLoggedIn, anunciosController.index);

router.post("/",cargar.single("archivo"),anunciosController.guardar);
router.post('/eliminar/:id', loginController.checkLoggedIn, anunciosController.eliminar);

router.get('/editar/:id', loginController.checkLoggedIn, anunciosController.editar);
router.get('/reservacion/:id', loginController.checkLoggedIn, anunciosController.reservacion);

router.get('/IndexUser', loginController.checkLoggedIn, anunciosController.indexUser);

router.post("/actualizar", cargar.single("archivo"),anunciosController.actualizar);

router.post("/reservar", cargar.single("archivo"),anunciosController.reservar);

module.exports = router;