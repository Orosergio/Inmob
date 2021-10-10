const { check, oneOf, validationResult } = require('express-validator');

let validateRegister = [
    check("email","Invalid Email").isEmail().trim(),
    check("password","Invalida Password. Password must be at least 2 chars long")
    .isLength({min:2}),
    check("ConfirmPassword","Password confirmation does not match password")
    .custom((value,{req})=>{
        return value === req.body.password
    })
];

module.exports = {
    validateRegister: validateRegister
};