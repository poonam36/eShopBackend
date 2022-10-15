
const db = require('../models');
const Address = db.address;
const jwt = require('jsonwebtoken');
const { request } = require('express');


const auth = require("../middleware/auth");

module.exports.addAddresses = (req, res) => {
    //const email = req.body.email;
    //const password = req.body.password;
    //get user from session storage
    let user = sessionStorage.getItem("loggedinUser");
    // Validate request
    if (user === null || user === undefined) {
        res.status(400).send(
            {
                message: "Please Login first to access this endpoint!"
            });
        return;
    }
}


//zipcode validation
//If the zip code provided by the user is not in the correct format, i.e., it does not /contain only numbers and its length is more or less than six digits), return the JSON response "Invalid zip code!" with the corresponding HTTP status.
let zipcode = req.body.zipcode;
let length = zipcode.length;
if (!(typeof (zipcode) === Number && length === 6)) {
    res.status(400).send(
        {
            message: "Invalid zip code!"
        });
    return;
}
//If the contact number provided by the user is not in the correct format, i.e., it does not contain only numbers or has more or less than 10 digits, returns the JSON response "Invalid contact number!" with the corresponding HTTP status.
let contactNumber = req.body.contactNumber;

if (!(typeof (contactNumber) === Number && contactNumber.length === 6)) {
    res.status(400).send(
        {
            message: "Invalid contact number!"
        }

    )
}
//If the user has logged in successfully, add the complete address in the database, then return the JSON object of the created address with the corresponding HTTP status.

const address = new Address({
    "name": req.body.name,
    "city": req.body.city,
    "state": req.body.state,
    "street": req.body.street,
    "contactNumber": req.body.contactNumber,
    "landmark": req.body.landmark,
    "zipCode": req.body.zipCode,
    "user": user._id,
});

address.
    save(address).
    then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(400).send({
            message: "Something went wrong,please try again later "
        });
    });
