module.exports = {
    obtener:function (conexion, funcion) {
        conexion.query("SELECT * FROM ANUNCIOS", funcion);
    },
    insertar:function(conexion, datos,archivo, funcion){
        conexion.query("INSERT INTO ANUNCIOS (direccion, idDepartamento, idMunicipio, titulo, descripcion, emailAnunciante, telefono, youtubeVideo,imagenAnuncio,estado,idInmueble,idPiso, idHab, idUsuario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[datos.direccion, datos.idDepartamento, datos.idMunicipio, datos.titulo, datos.descripcion, datos.email, datos.telefono, datos.youtube, archivo.filename, datos.estado,datos.idInmuebleAnuncio,datos.idNivelAnuncio,datos.idHabitacionAnuncio, datos.userInmueble], funcion);
    },
    insertarReservacion:function(conexion, datos,archivo, funcion){
        conexion.query("INSERT INTO ALQUILER (idTipoAlquiler, idInmueble, idNIvel, idHabitacion, precio, idInquilino, fechaIngreso, fechaCobro) VALUES (?,?,?,?,?,?,?,?)",[datos.tipoAlquiler, datos.inmueble, datos.nivel, datos.habitacion, datos.precio, datos.usuarioR, datos.fechaBoletaStart, datos.fechaBoletaPayment], funcion);
    },
    obtenerInmueble:function (conexion, funcion) {
        conexion.query("SELECT * FROM Inmueble",funcion);
    },
   
    obtenerMunicipio:function (conexion, funcion) {
        conexion.query("SELECT * FROM municipio where idDepartamento = 7",funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM ANUNCIOS WHERE idAnuncios = ?",[id], funcion);
    },
    retornarDatosINMID:function (conexion, id, funcion) {
        conexion.query("SELECT I.precio, I.deposito, I.noDepositos, A.titulo FROM INMUEBLE I, ANUNCIOS A where I.idInmueble = A.idInmueble and idAnuncios = ?;",[id], funcion);
    },
    retornarDatosNIVID:function (conexion, id, funcion) {
        conexion.query("SELECT N.precio, A.titulo FROM NIVEL N, ANUNCIOS A, INMUEBLE I where N.idInmueble = I.idInmueble and N.idInmueble = A.idInmueble and idAnuncios = ?;",[id], funcion);
    },
    retornarDatosHABID:function (conexion, id, funcion) {
        conexion.query("SELECT H.precio, A.titulo FROM HABITACION H, ANUNCIOS A, NIVEL N, INMUEBLE I where H.idNivel = N.idNivel and N.idInmueble = I.idInmueble and N.idInmueble = A.idInmueble and idAnuncios = ?;",[id], funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM ANUNCIOS WHERE idAnuncios = ? ",[id],funcion);
    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE ANUNCIOS SET direccion = ?, idDepartamento = ?, idMunicipio = ?, titulo = ?, descripcion = ?, emailAnunciante = ?, telefono = ?, youtubeVideo = ?,estado = ?,idInmueble = ?,idPiso = ?, idHab = ?, idUsuario = ? WHERE idAnuncios = ? ",[datos.direccion, datos.idDepartamento, datos.idMunicipio, datos.titulo, datos.descripcion, datos.email, datos.telefono, datos.youtube, datos.estado,datos.idInmueble,0,0, datos.id, datos.userInmueble], funcion);
    },
    actualizarArchivo:function(conexion, datos, archivo, funcion){
        conexion.query("UPDATE ANUNCIOS SET imagenAnuncio = ? WHERE idAnuncios = ? ",[archivo.filename,datos.id], funcion);
    }
    
}