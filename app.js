const express = require("express");
const produtoRouter = require("./router/produto_router");
const pedidoRouter = require("./router/pedido_router");
const clienteRouter = require("./router/cliente_router"); 

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mercado aberto! Bem vindo!!");
});

app.use("/produtos", produtoRouter);
app.use("/pedidos", pedidoRouter);
app.use("/clientes", clienteRouter); 

app.listen(port, () => {
  console.log(`Mercado-API listening on port ${port}`);
});

module.exports = { app };
