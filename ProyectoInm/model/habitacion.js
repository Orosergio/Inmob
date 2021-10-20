module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT H.idHabitacion, H.nombre, H.size, H.precio, H.fotografia, N.nombre as NivelName,H.idNivel, H.estado from habitacion H, nivel N where H.idNivel = N.idNivel;", funcion);
    },
    obtenerDepartamento: function (conexion, funcion) {
        conexion.query("SELECT idDepartamento, nombre as NombreDep from Departamento;", funcion);
    },
    obtenerMunicipios:function (conexion, funcion) {
        conexion.query("SELECT idMunicipio, nombre as NombreMun, idDepartamento as DepMunic from Municipio;",funcion);
    },
    insertar:function(conexion, datos, archivos, funcion){
        conexion.query("INSERT INTO HABITACION (nombre, size, precio, fotografia, idNIvel, estado) VALUES (?,?,?,?,?,?)",[datos.nombreHabitacion, datos.sizeHabitacion, datos.precioHabitacion, archivos.filename, datos.ApartamentoHabitacion, datos.estadoHabitacion], funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM HABITACION WHERE idHabitacion = ?",[id],funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM habitacion WHERE idHabitacion = ?",[id],funcion);
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query("UPDATE HABITACION SET nombre = ?, size = ?, precio = ?, idNivel = ?, estado = ? WHERE idHabitacion = ?",[datos.nombreHabitacion, datos.sizeHabitacion, datos.precioHabitacion, datos.ApartamentoHabitacion, datos.estadoHabitacion, datos.id], funcion);
    },
    actualizarArchivo: function (conexion, datos, archivo, funcion) {
        conexion.query("UPDATE HABITACION SET fotografia = ? WHERE idHabitacion = ?",[archivo.filename, datos.id], funcion);
    }
}