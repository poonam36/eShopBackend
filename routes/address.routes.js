module.exports = app => {
    var router = require("express").Router();

    const address = require('../controllers/address.controller');

    router.post("/addresses",auth, address.addAddresses);


    app.use('/api', router);

}
