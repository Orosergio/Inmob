var express = require('express');

var router = express.Router();
const pagosController = require("../controllers/pagosController");

/* GET home page. */
router.get('/', pagosController.index);

module.exports = router;