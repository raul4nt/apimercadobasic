const pedidoService = require("../service/pedido_service");

function listarPedidos(req, res) {
  try {
    const listaPedidos = pedidoService.listarPedidos();
    res.status(200).json(listaPedidos);
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

function inserirPedido(req, res) {
  const pedido = req.body;
  try {
    pedidoService.inserirPedido(pedido);
    res.status(201).json({ mensagem: "Seu pedido foi inserido" });
  } catch (error) {
    const statusCode = error.id || 500;  
    res.status(statusCode).json({ mensagem: error.message });
  }
}

 function buscarPedidoPorId(req, res) {
  const id = +req.params.id;
  try {
    const pedido =  pedidoService.buscarPedidoPorId(id);
    res.json(pedido);
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

 function atualizarPedido(req, res) {
  const id = +req.params.id;
  const pedido = req.body;
  try {
     pedidoService.atualizarPedido(id, pedido);
    res.status(200).json({ mensagem: "Seu pedido foi atualizado" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

 function deletarPedido(req, res) {
  const id = +req.params.id;
  try {
     pedidoService.deletarPedido(id);
    res.status(200).json({ mensagem: "Seu pedido foi deletado" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}


 function pedidosCliente(req, res) {
  const clienteId = +req.params.clienteId;

  try {
    const pedidosDoCliente =  pedidoService.pedidosCliente(clienteId);
    res.status(200).json({ pedidosDoCliente });
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

module.exports = {
  listarPedidos,
  inserirPedido,
  buscarPedidoPorId,
  atualizarPedido,
  deletarPedido,
  pedidosCliente
};
