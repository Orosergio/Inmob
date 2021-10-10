var conexion = require('../config/conexion');
var pago = require("../model/pagos");

module.exports = {
    index: function(req, res){
        
        pago.obtener(conexion, function (err, datos) {
            console.log(datos);
            res.render('usuarioNormal/pagos', { title: 'Pagos', pagos:datos });
        });
    }
    
}