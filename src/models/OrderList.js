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

    addOrder(order){
    this.orders.push(order);
    };

    deleteOrder(id, status){
        if(status = "preparado"){
            throw new Error("Não é possível deletar um pedido pronto")
        } else{
            this.orders = this.orders.filter(order = order.id != id);
        }
    }
}

module.exports = OrderList;