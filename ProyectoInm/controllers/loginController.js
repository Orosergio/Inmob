
let getLoginPage = (req, res)=>{
    return res.render("login.ejs", {
        errors: req.flash("errors")
    });;
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.logout(function(err) {
        if (err) {
            return res.redirect("/");
        }

        req.session.destroy(function() {
            return res.redirect("/login");
        });
    });
};

module.exports = {
    getLoginPage: getLoginPage,
    checkLoggedOut: checkLoggedOut,
    checkLoggedIn: checkLoggedIn,
    postLogOut: postLogOut
}
