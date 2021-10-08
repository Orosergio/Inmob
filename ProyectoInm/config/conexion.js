var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'inmobiliaria'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('conexión establecida');
        }else{
            console.log('error de conexión');
        }
    }
);

module.exports = con;