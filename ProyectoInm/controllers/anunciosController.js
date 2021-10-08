var conexion = require('../config/conexion');
var anuncio = require("../model/anuncio");
var borrar = require("fs");
const { obtenerDepartamento, obtenerInmueble } = require('../model/anuncio');

module.exports = {
    index:function (req, res) {
        anuncio.obtener(conexion,function (err,datos) {
            console.log(datos);
            res.render('anuncios/indexanuncios',{title:'Anuncios', anuncios:datos});
        });
    },
    crear:function (req, res) {
        
        anuncio.obtenerInmueble(conexion,function (err,datos) {
            //console.log(datos);
            anuncio.obtenerDepartamento(conexion, function (err, datos2) {
                console.log(datos.concat(datos2));
                //console.log(datos2);
                res.render('anuncios/crearanuncio',{title:'crearanuncio', anuncioInmuebles:datos.concat(datos2)});
            });
             
        });        
    },
    guardar:function (req, res) {
        console.log(req.body);
        anuncio.insertar(conexion, req.body,req.file, function (err) {
             res.redirect('/anuncios');
        });
    },
    eliminar:function (req, res) {
        console.log("Recepción de datos");
        console.log(req.params.id);

        anuncio.retornarDatosID(conexion,req.params.id,function (err,registros) {
            var nombreImagen = "public/images/anuncios/"+(registros[0].imagenAnuncio);
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
            }
            
            anuncio.borrar(conexion, req.params.id, function (err) {
                 res.redirect('/anuncios');
            });

        });
    },
    editar:function (req, res) {
        
        anuncio.retornarDatosID(conexion,req.params.id,function (err,registros) {
            console.log(registros[0]);
            res.render('anuncios/editar',{anuncio:registros[0]});
        });
    },
    actualizar:function name(req, res) {
        console.log(req.body.titulo);
        
        if(req.file){
            if(req.file.filename){
                anuncio.retornarDatosID(conexion,req.body.id,function (err,registros) {
                    var nombreImagen = "public/images/anuncios/"+(registros[0].imagenAnuncio);
                    if(borrar.existsSync(nombreImagen)){
                        borrar.unlinkSync(nombreImagen);
                    }
                    
                    anuncio.actualizarArchivo(conexion, req.body, req.file, function (err) { });
                });
            }
        }

        if(req.body.titulo){
            anuncio.actualizar(conexion, req.body, function (err) { });
            }
        res.redirect('/anuncios');
    }
}