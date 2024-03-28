const router = require("express").Router();

const Customer = require("../controllers/customerController");

router.get("/create", Customer.createCustomer);

module.exports = router;
