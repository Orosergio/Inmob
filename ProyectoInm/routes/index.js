var express = require('express');
var router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const auth = require("../validation/authValidation"); 
const passport = require('passport'); 
const initPassportLocal = require("../controllers/passportLocalController"); 
const indexController = require('../controllers/indexController');

initPassportLocal();

/* GET home page. */
router.get('/', loginController.checkLoggedIn, indexController.getHomePage);
router.get('/login', loginController.checkLoggedOut,loginController.getLoginPage);
router.post('/login', passport.authenticate('local.signin',{
  successRedirect: '/',
  failureRedirect: '/login',
  successFlash: true,
  failureFlash: true
}));
router.get('/register', registerController.getRegisterPage);
router.post('/register', auth.validateRegister, registerController.createNewUser);
router.post('/logout', loginController.postLogOut);
 
module.exports = router;

