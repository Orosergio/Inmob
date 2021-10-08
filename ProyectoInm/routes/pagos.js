var express = require('express');

var router = express.Router();
const pagosController = require("../controllers/pagosController");

/* GET home page. */
router.get('/', pagosController.index);
router.get('/reservacion', pagosController.reservacion);

module.exports = router;