var connection = require("../config/conexion");
var bcrypt = require('bcryptjs');

let findUserByEmail = (email) => {
    return new Promise(((resolve,reject) => {   
        try {
            connection.query("SELECT * FROM USUARIO WHERE email = ?", email, function(error, rows) {
                if(error){
                    reject(error);
                }
                let user = rows[0];
                console.log(user);
                resolve(user);
            })
        } catch (e) {
            reject(e);
        }
    }));
};

let comparePasswordUser = (user, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isMatch = await bcrypt.compare(password, user.contrasenia);
            if(isMatch){
                resolve(true);
            }
            resolve("The password that you've entered is incorrect");
        } catch (e) {
            reject(e);
        }
    });
};

let findUserById = (idUsuario) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * FROM USUARIO WHERE idUsuario = ?", idUsuario, function (error, rows) {
                if(error) reject(error);
                let user = rows[0];
                resolve(user);
            })
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    comparePasswordUser: comparePasswordUser,
    findUserByEmail: findUserByEmail,
    findUserById: findUserById    
};