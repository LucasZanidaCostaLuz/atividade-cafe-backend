const { v4: uuidv4} = require("uuid");

class Coffee{
    constructor(product, price){
        this.id = uuidv4(),
        this.product = product,
        this.price = price;
    }
}

module.exports = Coffee