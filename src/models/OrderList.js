class OrderList {
    constructor(){
        this.orders = []
    }
    getOrderById(id){
        const order = this.orders.find(order => order.id = id)
        if(!order){
            throw new Error("escolha um pedido existente");
        }
        return order;
    };

    addOrderById(id){
        const order = getOrderById(id);
        if(!order){
            throw new Error("escolha um pedido existente no menu");
        }
        return this.orders.push(order);
    };

    deleteOrder(id){
        this.orders = this.orders.filter(order = order.id != id);
    }
}

module.exports = OrderList;