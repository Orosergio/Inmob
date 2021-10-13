var conexion = require('../config/conexion');
var habitacion = require("../model/habitacion");
var borrar = require("fs");

module.exports = {
    index: function(req, res){
        
        habitacion.obtener(conexion, function (err, datos) {
            console.log(datos);
            res.render('Inmuebles/indexHabitacion', { title: 'Habitaciones', habitaciones:datos });
        });
    },
    crear:function (req, res) {
        res.render('Inmuebles/crearHabitacion');
    },
    guardar:function (req, res) {
        console.log(req.body);
        console.log(req.file.filename);
        habitacion.insertar(conexion, req.body, req.file, function (err) {
             res.redirect('/habitaciones');
        });
    },
    eliminar:function (req,res) {
        console.log("Recepcion de datos");
        console.log(req.params.id);

        habitacion.retornarDatosID(conexion, req.params.id,function (err,registros) {
            var nombreImagen = "public/images/habitaciones/"+(registros[0].fotografia);
           //res.send(nombreImagen);
            
           if(borrar.existsSync(nombreImagen)){
               borrar.unlinkSync(nombreImagen);
           }

           habitacion.borrar(conexion, req.params.id, function (err) {
                res.redirect('/habitaciones');
           });
        });
    },
    editar:function (req,res) {
        
        habitacion.retornarDatosID(conexion, req.params.id,function (err,registros) {
            console.log(registros[0]);
            res.render('Inmuebles/editarHabitacion',{habitacion:registros[0]});
        });
    },
    actualizar:function name(req, res) {
        console.log(req.body.nombre);
        
        if(req.file){
            if(req.file.filename){
                habitacion.retornarDatosID(conexion, req.body.id, function (err,registros) {
                    var nombreImagen = "public/images/habitaciones/"+(registros[0].fotografia);
                   
                   if(borrar.existsSync(nombreImagen)){
                       borrar.unlinkSync(nombreImagen);
                   }
        
                   habitacion.actualizarArchivo(conexion, req.body, req.file, function(params) {});
                });
            }
        }
        
        if(req.body.nombreHabitacion){
        habitacion.actualizar(conexion, req.body, function (err) { });
        }
         res.redirect('/habitaciones');
    }
}