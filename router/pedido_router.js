const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/pedido_controller");

router.get("/", pedidoController.listarPedidos);
router.post("/", pedidoController.inserirPedido);
router.get("/:id", pedidoController.buscarPedidoPorId);
router.put("/:id", pedidoController.atualizarPedido);
router.delete("/:id", pedidoController.deletarPedido);

module.exports = router;
