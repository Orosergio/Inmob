var conexion = require('../config/conexion');
var pagoInmueble = require("../model/pagosInmueble");
var borrar = require("fs");

module.exports = {
    index: function(req, res){
        
        pagoInmueble.obtener(conexion, function (err, datos) {
            console.log(datos);
            res.render('usuarioNormal/pagosInmueble', { title: 'PagosInmueble', pagosInmueble:datos });
        });
    },
    crearPago:function (req, res) {
        res.render('usuarioNormal/crearPago');
    },
    guardar:function (req, res) {
        console.log(req.body);
        console.log(req.file.filename);
        pagoInmueble.insertar(conexion, req.body, req.file, function (err) {
             res.redirect('/pagosInmueble');
        });
    },
    eliminar:function (req, res) {
        console.log("Recepción de datos");
        console.log(req.params.id);
        pagoInmueble.retornarDatosID(conexion,req.params.id, function (err,registros) {
            var nombreImagen="public/images/boletasPago/"+(registros[0].boletaPago);
           
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
            }
            
            pagoInmueble.borrar(conexion, req.params.id, function (err) {
                 res.redirect('/pagosInmueble');
            });

        });
    },

    editar:function (req, res) {
        
        pagoInmueble.retornarDatosID(conexion,req.params.id, function (err,registros) {
            console.log(registros[0]);
            res.render('usuarioNormal/editarPagosInmueble',{pagoInmueble:registros[0]});
        }); 
    },
    actualizar:function name(req, res) {
        console.log(req.body.descriptionIn);
       
        if(req.file){
            if(req.file.filename){
                pagoInmueble.retornarDatosID(conexion,req.body.idControl, function (err,registros) {
                    var nombreImagen="public/images/boletasPago/"+(registros[0].boletaPago);
                   
                    if(borrar.existsSync(nombreImagen)){
                        borrar.unlinkSync(nombreImagen);
                    }
                    
                   pagoInmueble.actualizarArchivo(conexion, req.body, req.file, function(err){});
        
                });
            }
        }   

        if(req.body.descriptionIn){
            pagoInmueble.actualizar(conexion, req.body, function (err) { });
            
        }

        res.redirect('/pagosInmueble'); 
         
        
        //console.log(req.file.filename);
    }
}