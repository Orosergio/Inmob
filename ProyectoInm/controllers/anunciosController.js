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
                //console.log(datos.concat(datos2));
                anuncio.obtenerMunicipio(conexion, function (err, datos3) {
                    console.log(datos.concat(datos2).concat(datos3));
                    res.render('anuncios/crearanuncio',{title:'crearanuncio', anuncioInmuebles:datos, anuncioDeps:datos2, anuncioMuns:datos3});
                });
                
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
    reservacion:function (req, res) {
        
        anuncio.retornarDatosID(conexion,req.params.id,function (err,registros) {

            if(registros[0].idHab != 0){
                anuncio.retornarDatosHABID(conexion, req.params.id, function (err, registros2) {
                    console.log(registros[0]);
                    console.log(registros2[0]);
                    res.render('anuncios/crearReservacion',{anuncio:registros[0], anuncio2:registros2[0]});
                }); 
            }else if(registros[0].idPiso != 0){
                anuncio.retornarDatosNIVID(conexion, req.params.id, function (err, registros2) {
                    console.log(registros[0]);
                    console.log(registros2[0]);
                    res.render('anuncios/crearReservacion',{anuncio:registros[0], anuncio2:registros2[0]});
                });  
            }else if(registros[0].idInmueble != 0){
                anuncio.retornarDatosINMID(conexion, req.params.id, function (err, registros2) {
                    console.log(registros[0]);
                    console.log(registros2[0]);
                    res.render('anuncios/crearReservacion',{anuncio:registros[0], anuncio2:registros2[0]});
                });  
            }

                      
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
    },
    reservar: function name(req, res) {
        anuncio.insertarReservacion(conexion, req.body, function (err) {
            res.redirect('/anuncios');
       });
        res.redirect('/pagos');
    },
    indexUser: function (req, res) {
        console.log(req.body.titulo);
        anuncio.obtener(conexion,function (err,datos) {
            console.log(datos);
            res.render('anuncios/IndexUser',{title:'AnunciosUser', anunciosU:datos});
        });
    }
}