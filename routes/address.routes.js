module.exports = app => {
    var router = require("express").Router();

    const address = require('../controllers/address.controller')

    router.post("/addresses", address.addAddresses);


    app.use('/api', router);

}
