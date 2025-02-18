const express = require("express");
const router = express.Router();
const coffeeController = require("../controller/coffeeController")

router.get("/coffees", coffeeController.getAllProduct);
router.post("/order", coffeeController.addOrder);
router.get("order/:id", coffeeController.getOrderById);
router.delete("order/:id", coffeeController.deleteOrder);