const clienteRepository = require("../repository/cliente_repository");

 function listarClientes() {
  try {
    return  clienteRepository.listarClientes();
  } catch (error) {
    throw new Error(`Erro ao listar clientes: ${error.message}`);
  }
}

 function inserirCliente(cliente) {
  try {
    return  clienteRepository.inserirCliente(cliente);
  } catch (error) {
    throw new Error(`Erro ao inserir cliente: ${error.message}`);
  }
}

 function buscarClientePorId(id) {
  try {
    return  clienteRepository.buscarClientePorId(id);
  } catch (error) {
    throw new Error(`Erro ao buscar cliente: ${error.message}`);
  }
}

 function atualizarCliente(id, cliente) {
  try {
    return  clienteRepository.atualizarCliente(id, cliente);
  } catch (error) {
    throw new Error(`Erro ao atualizar cliente: ${error.message}`);
  }
}

 function deletarCliente(id) {
  try {
    return  clienteRepository.deletarCliente(id);
  } catch (error) {
    throw new Error(`Erro ao deletar cliente: ${error.message}`);
  }
}

 function infoCliente(clienteId) {
    try {
      const infoCliente =  clienteRepository.infoCliente(clienteId);
      return infoCliente;
    } catch (error) {
      throw new Error(`Erro ao calcular as informações do cliente: ${error.message}`);
    }
  }

module.exports = {
  listarClientes,
  inserirCliente,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente,
  infoCliente
};
