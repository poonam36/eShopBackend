module.exports = app => {
    var router = require("express").Router();

    const order = require('../controllers/product.controller')

    router.get("/products", product.findProducts);
    router.get("/products/categories",product.getProductCategory);
    router.get("products/:id".product.getProductId);
    router.post("/products",product.saveProducts);
    router.put("/products/:id",product.updateProduct)


    app.use('/api', router);

}
