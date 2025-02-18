const express = require("express");
const cors = require("cors");
const coffeeRoutes = require("./src/routes/coffeeRoutes");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", coffeeRoutes);

app.get("/", (req, res) => {
    res.send("eu amo ds")
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});