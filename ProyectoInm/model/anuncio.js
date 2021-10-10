module.exports = {
    obtener:function (conexion, funcion) {
        conexion.query("SELECT * FROM ANUNCIOS", funcion);
    },
    insertar:function(conexion, datos,archivo, funcion){
        conexion.query("INSERT INTO ANUNCIOS (direccion, idDepartamento, idMunicipio, titulo, descripcion, emailAnunciante, telefono, youtubeVideo,imagenAnuncio,estado,idInmueble,idPiso, idHab) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[datos.direccion, datos.idDepartamento, datos.idMunicipio, datos.titulo, datos.descripcion, datos.email, datos.telefono, datos.youtube, archivo.filename, datos.estado,datos.idInmueble,0,0], funcion);
    },
    obtenerInmueble:function (conexion, funcion) {
        conexion.query("SELECT * FROM Inmueble",funcion);
    },
    obtenerDepartamento:function (conexion, funcion) {
        conexion.query("SELECT * FROM departamento",funcion);
    },
    obtenerMunicipio:function (conexion, funcion) {
        conexion.query("SELECT * FROM municipio",funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM ANUNCIOS WHERE idAnuncios = ?",[id], funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM ANUNCIOS WHERE idAnuncios = ? ",[id],funcion);
    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE ANUNCIOS SET direccion = ?, idDepartamento = ?, idMunicipio = ?, titulo = ?, descripcion = ?, emailAnunciante = ?, telefono = ?, youtubeVideo = ?,estado = ?,idInmueble = ?,idPiso = ?, idHab = ? WHERE idAnuncios = ? ",[datos.direccion, datos.idDepartamento, datos.idMunicipio, datos.titulo, datos.descripcion, datos.email, datos.telefono, datos.youtube, datos.estado,datos.idInmueble,0,0, datos.id], funcion);
    },
    actualizarArchivo:function(conexion, datos, archivo, funcion){
        conexion.query("UPDATE ANUNCIOS SET imagenAnuncio = ? WHERE idAnuncios = ? ",[archivo.filename,datos.id], funcion);
    }
    
}