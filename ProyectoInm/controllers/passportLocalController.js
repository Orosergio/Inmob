//import passport, { use } from "passport";
const passport = require('passport');
//import passportLocal from "passport-local";
const passportLocal = require('passport-local');
const loginService = require("../services/loginService");

const LocalStrategy = passportLocal.Strategy;

let initPassportLocal = ()=>{
    passport.use('local.signin',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },

    async (req, email, password, done) => {
        //console.log(req.body);
        try {
            let user = await loginService.findUserByEmail(email);
            if(!user){
                return done(null, false, req.flash("errors", `This user email "${email}" doesn't exist`));
            }
            if(user){
                //compare password
                let match = await loginService.comparePasswordUser(user, password);
                if(match === true){
                    return done(null, user, null);
                }else{
                    return done(null, false, req.flash("errors", match));
                }
            }
        } catch (err) {
            return done(null, false, err);
        }
    }));
};

passport.serializeUser((user, done) => {
    done(null, user.idUsuario);
});

passport.deserializeUser((idUsuario,done) => {
    loginService.findUserById(idUsuario).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error,null)
    });
});

module.exports = initPassportLocal;