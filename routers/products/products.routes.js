const express = require("express");
const router = express.Router();
const { products } = require('../../data/data');


router.get("/", (req, res) => {
  let productsResponse = [...products];
  return productsResponse;
});

module.exports = router;