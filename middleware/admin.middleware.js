//Validating token
const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
    //extracting token from header
    const token = req.headers["authorization"];
    if (!token) return res.status(401).send("Access denied.No token provided");
    try {
        jwt.verify(token, "myprivatekey")
        next();
    } catch (ex) {
        res.status(401).send("Invalid token");
    }

}