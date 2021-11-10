module.exports = {
    obtener:function(conexion,id,funcion){
        conexion.query("SELECT N.idNivel, N.nombre as nombreApart, N.altura, N.size, N.precio, N.fotografia, I.nombre as NombreInm, N.estado from nivel N, inmueble I where N.idInmueble = I.idInmueble and I.idUser = ?;",[id] ,funcion);
    },
    obtenerInmuebles: function (conexion, funcion) {
        conexion.query("SELECT * FROM INMUEBLE");
    },
    insertar:function(conexion, datos, archivos, funcion){
        conexion.query("INSERT INTO NIVEL (nombre, altura, size, precio, fotografia, idInmueble, estado) VALUES  (?,?,?,?,?,?,?)",[datos.nombreApartamento, datos.alturaApartamento, datos.sizeApartamento, datos.precioApartamento, archivos.filename, datos.inmuebleApartamento, datos.estadoApartamento], funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM nivel WHERE idNivel = ?",[id],funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM nivel WHERE idNivel = ?",[id],funcion);
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query("UPDATE NIVEL SET nombre = ?, altura = ?, size = ?, precio = ?, idInmueble = ?, estado = ? WHERE idNivel = ?",[datos.nombreApartamento, datos.alturaApartamento, datos.sizeApartamento, datos.precioApartamento, datos.inmuebleApartamento, datos.estadoApartamento, datos.id], funcion);
    },
    actualizarArchivo: function (conexion, datos, archivo, funcion) {
        conexion.query("UPDATE NIVEL SET fotografia = ? WHERE idNivel = ?",[archivo.filename, datos.id], funcion);
    }
}