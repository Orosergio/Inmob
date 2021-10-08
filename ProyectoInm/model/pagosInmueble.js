module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT CA.idControl, I.nombre as Inmueble, CA.boletaPago, CA.fechaBoleta, CA.descripcion FROM CONTROLALQUILER CA, ALQUILER A, INMUEBLE I WHERE CA.idAlquiler = A.idAlquiler AND A.idInmueble = I.idInmueble;", funcion);
    },
    insertar:function(conexion, datos, archivos, funcion){
        conexion.query("INSERT INTO CONTROLALQUILER (idAlquiler,boletaPago,fechaBoleta,descripcion) VALUES (?,?,?,?)",[datos.idAlquiler, archivos.filename, datos.fechaBoleta, datos.descriptionIn], funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT CA.idControl, I.nombre as Inmueble, CA.boletaPago, CA.fechaBoleta, CA.descripcion FROM CONTROLALQUILER CA, ALQUILER A, INMUEBLE I WHERE CA.idAlquiler = A.idAlquiler AND A.idInmueble = I.idInmueble and idControl = ?;",[id], funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM controlalquiler WHERE idControl = ?;",[id],funcion);
    },
    actualizar:function(conexion, datos, funcion){
        
        conexion.query("UPDATE CONTROLALQUILER SET fechaBoleta = ?, descripcion = ? WHERE idControl =? ",[datos.fechaBoleta, datos.descriptionIn, datos.idControl], funcion);
    },
    actualizarArchivo:function(conexion, datos, archivo, funcion){
        
        conexion.query("UPDATE CONTROLALQUILER SET boletaPago = ? WHERE idControl =? ",[archivo.filename, datos.idControl], funcion);
    }
    
}