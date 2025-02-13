const {v4: uuidv4} = require("uuid");

class Order{
    constructor(id, product, price){
        this.id = uuidv4(),
        this.product = product,
        this.price = price;
    }
}

module.exports = Order;