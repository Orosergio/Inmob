module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT I.idInmueble, I.nombre, I.direccion, I.zona, I.precio, I.estado, M.nombre as Municipio, I.deposito, I.noDepositos, U.nombreUsuario as Usuario FROM INMUEBLE I, MUNICIPIO M, USUARIO U WHERE I.idMunicipio = M.idMunicipio AND I.idUser = U.idUsuario;", funcion);
    },
    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO INMUEBLE (nombre, direccion, zona, precio, estado, idMunicipio, deposito, noDepositos, idUser) VALUES (?,?,?,?,?,?,?,?,?)",[datos.nombreInmueble, datos.direccionInmueble, datos.zonaInmueble, datos.precioInmueble, datos.estadoInmueble, datos.municipioInmueble, datos.depositoInmueble, datos.noDepositoInmueble, datos.userInmueble], funcion);
    },
    retornarDatosID:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM INMUEBLE WHERE idInmueble = ?",[id],funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM INMUEBLE WHERE idInmueble = ?",[id],funcion);
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query("UPDATE INMUEBLE SET nombre = ?, direccion = ?, zona = ?, precio = ?, estado = ?, idMunicipio = ?, deposito = ?, noDepositos = ?, idUser = ? WHERE idInmueble = ?",[datos.nombreInmueble, datos.direccionInmueble, datos.zonaInmueble, datos.precioInmueble, datos.estadoInmueble, datos.municipioInmueble, datos.depositoInmueble, datos.noDepositoInmueble, datos.userInmueble, datos.id], funcion);
    }
}