var express = require('express');
var router = express.Router();
const anunciosController = require("../controllers/anunciosController");

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


router.get('/', anunciosController.index);
router.get('/crearanuncio', anunciosController.crear);
router.post("/",cargar.single("archivo"),anunciosController.guardar);
router.post('/eliminar/:id', anunciosController.eliminar);

router.get('/editar/:id', anunciosController.editar);

router.post("/actualizar",cargar.single("archivo"),anunciosController.actualizar);

module.exports = router;