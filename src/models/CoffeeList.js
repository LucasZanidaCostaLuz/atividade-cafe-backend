class CoffeeList{
    constructor(){
        this.coffees = []
    }
    addProduct(coffee){
        this.coffees.push(coffee);
    };
    getAllProduct(){
        return this.coffees;
    }
}

module.exports = CoffeeList