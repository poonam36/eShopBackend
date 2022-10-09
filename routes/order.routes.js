module.exports = app => {
    var router = require("express").Router();

    const order = require('../controllers/order.controller')

    router.post("/orders", order.orders);


    app.use('/api', router);

}
