const {v4: uuidv4} = require("uuid");

class Order{
    constructor(product, price, status){
        this.id = uuidv4(),
        this.product = product,
        this.price = price;
        this.status = status
    }
}

module.exports = Order;