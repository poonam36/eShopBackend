module.exports = app => {
    var router = require("express").Router();

    const user = require('../controllers/user.controller')

    router.post("/users",auth, user.signup);

    router.post("/login",admin ,user.login);

    app.use('/api', router);

}
