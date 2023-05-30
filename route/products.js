const express = require('express');
const { addProduct, getAllProducts, getProduct, DELETEProduct, UpadateProduct } = require('../controller/controlProducts');
const router = express.Router();

router.route("/products").post(addProduct);
router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getProduct);
router.route("/products/:id").put(UpadateProduct);
router.route("/products/:id").delete(DELETEProduct);
module.exports = router;