var conexion = require('../config/conexion');
var anuncio = require("../model/anuncio");

let getHomePage = (req, res) => {
    return res.render("index.ejs",{
        user: req.user
    });
};

module.exports = {
    getHomePage: getHomePage
};