var connection = require("../config/conexion");
//import bcryptjs from "bcryptjs";
var bcryptjs = require('bcryptjs');

let createNewUser = (user)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            //check email is exist or not
            let check = await checkEmailUser(user.email);
            if(check){
                reject(`This email "${user.email}" has already exist. Please choose an other email`);
            }else{
                //hash the user password `
                let salt = bcryptjs.genSaltSync(10);
                let data = {
                    rol: user.cmbRol,
                    nombreUsuario: user.userName,
                    contrasenia: bcryptjs.hashSync(user.password, salt),
                    email: user.email,
                    dpi: user.idDoc,
                    nombres: user.fullNames,
                    apellidos: user.fullLastNames,
                    fotocopiaDPI: user.fotocopia,
                    estatus:user.estatus
                };
               // console.log("data:"+data);
                connection.query("INSERT INTO USUARIO set ?", data, function (error, rows) {
                    if(error){
                        reject(error);
                        console.log(error);
                    }
                    resolve("Create a new user successfully");
                });
            }

        } catch (e) {
            reject(e);
        }
    });
};

let checkEmailUser = (email) => {
    return new Promise(((resolve, reject) => {
        try {
            connection.query("SELECT * FROM USUARIO WHERE email = ?", email, function (error, rows) {
                if(error){
                    reject(error);
                }
                if(rows.length > 0){
                    resolve(true);
                }else{
                    resolve(false);
                }
            });
        } catch (e) {
            reject(e);
        }
    }))
};

module.exports = {
    createNewUser: createNewUser
};