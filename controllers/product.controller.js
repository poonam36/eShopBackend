
const db = require('../models');
const Product = db.product;
const jwt = require('jsonwebtoken');

module.exports.findProducts = (req, res) => {
  Artist.find({}).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: "Some error occured while retrieving the products"
    });
  })
}
const admin = require("../middleware/admin");


module.exports.getProductCategory = (req, res) => {
  const id = req.params.id;

  Movie.findOne({ productid: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with id=" + id });
    });
};

module.exports.getProductId = (req, res) => {
  const category = req.params.category;

  Movie.findOne({ productcategory: category })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Category with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Category with id=" + id });
    });
};