const pedidoRepository = require("../repository/pedido_repository");

async function listarPedidos() {
  return await pedidoRepository.listarPedidos();
}

async function inserirPedido(pedido) {
  if (pedido && pedido.produto_id && pedido.quantidade && pedido.valor_total) {
    return await pedidoRepository.inserirPedido(pedido);
  } else {
    throw {
      id: 400,
      message: "Campos inválidos. Preencha com produto_id, quantidade e valor_total",
    };
  }
}

async function buscarPedidoPorId(id) {
  const pedido = await pedidoRepository.buscarPedidoPorId(id);
  if (pedido && pedido.length > 0) {
    return pedido;
  } else {
    throw { id: 404, message: "Pedido não encontrado" };
  }
}

async function atualizarPedido(id, pedido) {
  const pedidoEncontrado = await pedidoRepository.buscarPedidoPorId(id);
  if (pedidoEncontrado && pedidoEncontrado.length > 0) {
    if (pedido && pedido.produto_id && pedido.quantidade && pedido.valor_total) {
      await pedidoRepository.atualizarPedido(id, pedido);
    } else {
      throw {
        id: 400,
        message: "Campos inválidos. Preencha com produto_id, quantidade e valor_total",
      };
    }
  } else {
    throw { id: 404, message: "Este pedido não existe" };
  }
}

async function deletarPedido(id) {
  const pedido = await pedidoRepository.buscarPedidoPorId(id);
  if (pedido && pedido.length > 0) {
    await pedidoRepository.deletarPedido(id);
  } else {
    throw { id: 404, message: "Este pedido não existe" };
  }
}

module.exports = {
  listarPedidos,
  inserirPedido,
  buscarPedidoPorId,
  atualizarPedido,
  deletarPedido,
};
