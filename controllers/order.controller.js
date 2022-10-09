const db = require('../models');
const Order= db.order;
const jwt = require('jsonwebtoken');


module.exports.orders = (req, res) => {
    let user = sessionStorage.getItem("loggedinUser");
    // Validate request
    if (user ===null || user === undefined) {
        res.status(400).send(
            {
                message: "Please Login first to access this endpoint!"
            });
        return;
    }
}

if(!User){
    res.status(401).send(
        {
            message: "You are not authorized to access this endpoint!"
        }
        );
}

//If the product id entered by the user does not match any product id in the database, return the JSON response "No Product found for ID - <id>!" with the corresponding HTTP status. 

let productId = req.body.product_id;
if(!productId){
    res.status(404).send(
        {
            message:  "No Product found for ID " + id
        }
        );

}

//If the address id entered by the user does not match any address id in the database, return the JSON response "No Address found for ID - <id>!" with the corresponding HTTP status. 
let addressId = req.body.address_id;
if(!addressId){
    res.status(404).send(
        {
            message:  "No Address found for ID " + id
        }
        );

}

//If the product id entered exists, but it is not available anymore or is out of stock , return the JSON response "Product with ID - <id> is currently out of stock!" with the corresponding HTTP status. 
if (order === null) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    console.log(hash);
    return;


    //signup use
    const order = new Order({
       "address": req.body.address,
       "product": req.body.product,
       "quantity": req.body.quantity,
       "user": req.body.user

    });

    order.
        save(order).
        then((data) => {
            res.send(data)
        }).catch(err => {
            res.status(400).send({
                message: "Something went wrong,please try again later "
            });
        });
} else {
    res.status(400).send({
        message: "Product with ID - <id> is currently out of stock!" 
    });
}



