var conexion = require('../config/conexion');
var inmueble = require("../model/inmueble");

module.exports = {
    index: function(req, res){
        
        inmueble.obtener(conexion, function (err, datos) {
            console.log(datos);
            res.render('Inmuebles/index', { title: 'Inmuebles', inmuebles:datos });
        });
    },
    crear:function (req, res) {
        res.render('Inmuebles/crear');
    },

    guardar:function (req, res) {
        console.log(req.body);

        inmueble.insertar(conexion, req.body, function (err) {
             res.redirect('/inmuebles');
        });
    },
    eliminar:function (req,res) {
        console.log("Recepcion de datos");
        console.log(req.params.id);
        inmueble.retornarDatosID(conexion, req.params.id,function (err,registros) {
            inmueble.borrar(conexion, req.params.id, function (err) {
                 res.redirect('/inmuebles');
            });
        });
    },
    editar:function (req,res) {
        
        inmueble.retornarDatosID(conexion, req.params.id,function (err,registros) {
            console.log(registros[0]);
            res.render('Inmuebles/editar',{inmueble:registros[0]});
        });
    },
    actualizar:function name(req, res) {
        console.log(req.body.nombre);
        if(req.body.nombreInmueble){
        inmueble.actualizar(conexion, req.body, function (err) { });
        }
         res.redirect('/inmuebles');
    }
}