const Coffee = require("../models/Coffee");
const CoffeeList = require("../models/CoffeeList");
const OrderList = require("../models/OrderList");
const Order = require("../models/Order");

const listaC = new CoffeeList;

const listaO = new OrderList;

listaC.addProduct(new Coffee("café expresso", 17.5));

listaO.addOrder(new Order("café expresso", 17.5, "feito"));

const router = {
    addProduct: (req, res) =>{
        try {
            const {product, price} = req.body
            if(!product || !price){
                throw new Error("coloque todas as informações necessárias")
            }
            const coffee = new Coffee(product, price);
            listaC.addProduct(coffee)
            res.status(200).json({message: "produto criado com sucesso"});
        } catch (error) {
            res.status(404).json({message: "erro ao criar o produto"})
        }
    },
    getAllProduct: (req, res) => {
        try {
            res.status(200).json(listaC.getAllProduct())
        } catch (error) {
            res.status(404).json(
                {message: "Erro ao buscar cardápio"}
            )
        }
    },
    getOrderById: (req, res) => {
        try {
            res.status(200).json(listaO.getOrderById(req.params.id))
        } catch (error) {
            res.status(404).json({
                message: "erro ao buscar os pedidos"
            })
        }
    },
    addOrder: (req, res) => {
        try {
            const {product, price, status} = req.body;
            if(!product || !price || !status){
                throw new Error("insira todas as informações necessárias")
            } 
            const order = new Order(product, price, status);
            res.status(200).json(listaO.addOrder(order));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao criar pedido"
            })
        }
    },
    deleteOrder: (req, res) => {
        try {
            listaO.deleteOrder(req.params.id);
            res.status(200).json({
                message: "pedido apagado"
            })
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar pedido"
            })
        }
    }
}

module.exports = router;