var conexion = require('../config/conexion');
var inmueble = require("../model/inmueble");
var borrar = require("fs");

module.exports = {
    index: function(req, res){
        console.log(req.params.id);
        inmueble.obtener(conexion, req.params.id, function (err, datos) {
            console.log(datos);
            res.render('Inmuebles/index', { title: 'Inmuebles', inmuebles:datos });
        });
    },
    crear: function (req, res) {
        res.render('Inmuebles/crear');
    },

    guardar:function (req, res) {
        console.log(req.body);
        console.log(req.file.filename);
        inmueble.insertar(conexion, req.body, req.file, function (err) {
             res.redirect('/');
        });
    },
    eliminar:function (req,res) {
        console.log("Recepcion de datos");
        console.log(req.params.id);

        inmueble.retornarDatosID(conexion, req.params.id,function (err,registros) {
            var nombreImagen = "public/images/inmuebles/"+(registros[0].imagen);
           
           if(borrar.existsSync(nombreImagen)){
               borrar.unlinkSync(nombreImagen);
           }

           inmueble.borrar(conexion, req.params.id, function (err) {
                res.redirect('/');
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
        
        if(req.file){
            if(req.file.filename){
                inmueble.retornarDatosID(conexion, req.body.id, function (err,registros) {
                    var nombreImagen = "public/images/inmuebles/"+(registros[0].imagen);
                   
                   if(borrar.existsSync(nombreImagen)){
                       borrar.unlinkSync(nombreImagen);
                   }
        
                   inmueble.actualizarArchivo(conexion, req.body, req.file, function(params) {});
                });
            }
        }
        
        if(req.body.nombreInmueble){
        inmueble.actualizar(conexion, req.body, function (err) { });
        }
         res.redirect('/');
    }
}