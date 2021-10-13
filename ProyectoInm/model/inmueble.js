module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT I.idInmueble, I.nombre, I.direccion, I.zona, I.precio, I.estado, I.deposito, I.noDepositos, U.nombreUsuario as Usuario, I.imagen FROM INMUEBLE I, USUARIO U WHERE I.idUser = U.idUsuario;", funcion);
    },
    insertar:function(conexion, datos, archivos, funcion){
        conexion.query("INSERT INTO INMUEBLE (nombre, direccion, zona, precio, estado, deposito, noDepositos, idUser, imagen) VALUES (?,?,?,?,?,?,?,?,?)",[datos.nombreInmueble, datos.direccionInmueble, datos.zonaInmueble, datos.precioInmueble, datos.estadoInmueble, datos.depositoInmueble, datos.noDepositoInmueble, datos.userInmueble, archivos.filename], funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM INMUEBLE WHERE idInmueble = ?",[id],funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM INMUEBLE WHERE idInmueble = ?",[id],funcion);
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query("UPDATE INMUEBLE SET nombre = ?, direccion = ?, zona = ?, precio = ?, estado = ?, deposito = ?, noDepositos = ?, idUser = ? WHERE idInmueble = ?",[datos.nombreInmueble, datos.direccionInmueble, datos.zonaInmueble, datos.precioInmueble, datos.estadoInmueble, datos.depositoInmueble, datos.noDepositoInmueble, datos.userInmueble, datos.id], funcion);
    },
    actualizarArchivo: function (conexion, datos, archivo, funcion) {
        conexion.query("UPDATE INMUEBLE SET imagen = ? WHERE idInmueble = ?",[archivo.filename, datos.id], funcion);
    }
}