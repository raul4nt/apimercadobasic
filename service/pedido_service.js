const pedidoRepository = require("../repository/pedido_repository");
const { format } = require('date-fns');

function listarPedidos() {
  return pedidoRepository.listarPedidos();
}


function inserirPedido(pedido) {
  if (pedido && pedido.cliente_id && pedido.produto_id && pedido.quantidade) {
    try {
      return pedidoRepository.inserirPedido(pedido);
    } catch (error) {
      throw new Error(`Erro ao inserir o pedido: ${error.message}`);
    }
  } else {
    throw {
      id: 400,
      message: "Campos inválidos. Preencha com cliente_id, produto_id e quantidade.",
    };
  }
}


 function buscarPedidoPorId(id) {
  const pedido =  pedidoRepository.buscarPedidoPorId(id);
  if (pedido) {
    return pedido;
  } else {
    throw { id: 404, message: "Pedido não encontrado" };
  }
}


 function atualizarPedido(id, pedido) {
  try {
    const pedidoEncontrado =  pedidoRepository.buscarPedidoPorId(id);
    if (pedidoEncontrado) {
      if (pedido && pedido.cliente_id && pedido.produto_id && pedido.quantidade) {
         pedidoRepository.atualizarPedido(id, pedido);
      } else {
        throw {
          id: 400,
          message: "Campos inválidos. Preencha com cliente_id, produto_id e quantidade.",
        };
      }
    } else {
      throw { id: 404, message: "Este pedido não existe" };
    }
  } catch (error) {
    throw {
      id: error.id || 500,
      message: error.message || "Erro interno do servidor",
    };
  }
}



 function deletarPedido(id) {
  const pedido =  pedidoRepository.buscarPedidoPorId(id);
  if (pedido) {
     pedidoRepository.deletarPedido(id);
  } else {
    throw { id: 404, message: "Este pedido não existe" };
  }
}


 function pedidosCliente(clienteId) {
  try {
    const pedidosDoCliente =  pedidoRepository.pedidosCliente(clienteId);
    return pedidosDoCliente;
  } catch (error) {
    throw new Error(`Erro ao buscar os pedidos do cliente: ${error.message}`);
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
