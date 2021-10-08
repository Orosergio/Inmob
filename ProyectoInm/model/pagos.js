module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT A.idAlquiler, TA.nombre, A.idNivel, A.idHabitacion, A.precio, concat(U.nombres,' ', U.apellidos) as Inquilino, A.fechaIngreso, A.fechaCobro FROM ALQUILER A, TIPOALQUILER TA, USUARIO U WHERE A.idTipoAlquiler = TA.idTipoAlquiler AND A.idInquilino = U.idUsuario;", funcion);
    }
}