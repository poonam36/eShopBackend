const db = require('../models');
const User = db.users;
const jwt = require('jsonwebtoken');
//const { request } = require('express');
const bcrypt = require('bcrypt');


//Here we are creating user if the user is null we are creating user and if not we are saying user already exists
module.exports.signup = (req, res) => {
    //validate request coming from client
    if (!req.body.email && !req.body.password) {
        res.status(400).send({
            message: "Please provide emailId  and password to continue"
        });
        return;
        //stop the execution then and there do not proceede
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        console.log(user);
        if (user === null) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            console.log(hash);
            //signup use
            const user = new User({
                "email": req.body.email,
                "name": req.body.firstname + " " + req.body.lastname,
                "password": hash,
                "contact": req.body.contact

            });

            user.
                save(user).
                then((data) => {
                    res.send(data)
                }).catch(err => {
                    res.status(400).send({
                        message: "Something went wrong,please try again later "
                    });
                });
        } else {
            res.status(400).send({
                message: "Try any other email, this email is already registered!",
            });
        }
    });
};



module.exports.login = (req, res) => {

    // Validate request
    if (!req.body.email && !req.body.password) {
        res.status(400).send({ message: "This email has not been registered." });
        return;
    }

    //const filter = { email: email };
    User.findOne({ email: req.body.email }, (err, user) => {

        if (user == null) {
            res.status(401).send({
                //better message wrt security. Prevents brute force attacks
                message: "Invalid credentials."
            });
        } else {
            if (password === user.password) {
                user.isLoggedIn = true;

                User.findOneAndUpdate({ email: email }, user, { useFindAndModify: false })
                    .then(data => {
                        if (!data) {
                            res.status(404).send({
                                message: "Some error occurred, please try again later."
                            });
                        } else {
                            const token = jwt.sign({ _id: user._id }, 'myprivatekey');

                            user.token = token;
                            //store user object in sessionstorage
                            sessionStorage.setItem("loggedinUser", user);
                            res.send(user);
                        }
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error updating."
                        });
                    });

            } else {
                res.status(401).send({
                    message: "Password not correct."
                });
            }
        }

    });

};