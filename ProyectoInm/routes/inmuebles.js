var express = require('express');
var router = express.Router();
const inmueblesController = require("../controllers/InmueblesController");


/* GET home page. */
router.get('/', inmueblesController.index);
router.get('/crear', inmueblesController.crear);


//aqui recibo información desde crear
router.post("/", inmueblesController.guardar);

router.post('/eliminar/:id', inmueblesController.eliminar);
router.get('/editar/:id', inmueblesController.editar);

router.post("/actualizar", inmueblesController.actualizar);

module.exports = router;