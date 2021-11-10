var conexion = require('../config/conexion');
var apartamento = require("../model/apartamento");
var borrar = require("fs");

module.exports = {
    index: function(req, res){
        
        apartamento.obtener(conexion, req.params.id, function (err, datos) {
            console.log(datos);
            
            res.render('Inmuebles/indexApartamento', { title: 'Apartamentos', apartamentos:datos });
        });
    },
    crear:function (req, res) {
        res.render('Inmuebles/crearApartamento');
    },

    guardar:function (req, res) {
        console.log(req.body);
        console.log(req.file.filename);
        apartamento.insertar(conexion, req.body, req.file, function (err) {
             res.redirect('/');
        });
    },
    eliminar:function (req,res) {
        console.log("Recepcion de datos");
        console.log(req.params.id);

        apartamento.retornarDatosID(conexion, req.params.id,function (err,registros) {
            var nombreImagen = "public/images/apartamentos/"+(registros[0].fotografia);
           
           if(borrar.existsSync(nombreImagen)){
               borrar.unlinkSync(nombreImagen);
           }

           apartamento.borrar(conexion, req.params.id, function (err) {
                res.redirect('/');
           });
        });
    },
    editar:function (req,res) {
        
        apartamento.retornarDatosID(conexion, req.params.id,function (err,registros) {
            console.log(registros[0]);
            res.render('Inmuebles/editarApartamento',{apartamento:registros[0]});
        });
    },
    actualizar:function name(req, res) {
        console.log(req.body.nombre);
        
        if(req.file){
            if(req.file.filename){
                apartamento.retornarDatosID(conexion, req.body.id, function (err,registros) {
                    var nombreImagen = "public/images/apartamentos/"+(registros[0].imagen);
                   
                   if(borrar.existsSync(nombreImagen)){
                       borrar.unlinkSync(nombreImagen);
                   }
        
                   apartamento.actualizarArchivo(conexion, req.body, req.file, function(params) {});
                });
            }
        }
        
        if(req.body.nombreApartamento){
        apartamento.actualizar(conexion, req.body, function (err) { });
        }
         res.redirect('/');
    }
}