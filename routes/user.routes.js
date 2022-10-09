module.exports = app => {
    var router = require("express").Router();

    const user = require('../controllers/user.controller')

    router.post("/users", user.signup);

    //router.post("/login", user.login);

    app.use('/api', router);

}
