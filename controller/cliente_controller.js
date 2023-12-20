const clienteService = require("../service/cliente_service");

 function listarClientes(req, res) {
  try {
    const clientes =  clienteService.listarClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

 function inserirCliente(req, res) {
  const cliente = req.body;
  try {
    clienteService.inserirCliente(cliente);
    res.status(201).json({mensagem: 'Cliente Inserido com Sucesso!!'});
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

 function buscarClientePorId(req, res) {
  const id = +req.params.id;
  try {
    const cliente =  clienteService.buscarClientePorId(id);
    res.json(cliente);
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

 function atualizarCliente(req, res) {
  const id = +req.params.id;
  const cliente = req.body;
  try {
     clienteService.atualizarCliente(id, cliente);
    res.status(200).json({ mensagem: "Cliente atualizado com sucesso." });
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

 function deletarCliente(req, res) {
  const id = +req.params.id;
  try {
     clienteService.deletarCliente(id);
    res.status(200).json({ mensagem: "Cliente deletado com sucesso." });
  } catch (error) {
    res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}

 function infoCliente(req, res) {
    const clienteId = +req.params.clienteId;
    try {
      const infoCliente =  clienteService.infoCliente(clienteId);
      res.status(200).json({ infoCliente });
    } catch (error) {
      res.status(error.id || 500).json({ mensagem: error.message || "Erro interno do servidor" });
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
