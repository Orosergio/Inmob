const { validationResult } = require('express-validator');
var registerService = require("../services/registerService");

let getRegisterPage = (req, res) => {
    return res.render("register.ejs",{
        errors: req.flash("errors")
    });
};

let createNewUser = async(req, res)=>{
    //validate all required fields
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item)=>{
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return  res.redirect('/register');
    }

    //create a new user
    console.log(req.body);
    try{
        let newUser = {
            cmbRol: req.body.cmbRol,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            idDoc: req.body.idDoc,
            fullNames: req.body.fullNames,
            fullLastNames: req.body.fullLastNames,
            fotocopia: req.body.fotocopia,
            estatus:req.body.estado
        };
        await registerService.createNewUser(newUser);
        return  res.redirect('/login');
        
    }catch(e){
        req.flash("errors", e);
        return  res.redirect('/register');
    }
    
}

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};