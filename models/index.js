const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");



const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.address = require("./address.model.js")(mongoose);
db.order = require("./order.model.js")(mongoose);
db.product = require("./product.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);

module.exports = db;