const pedidoRepository = require("../repository/pedido_repository");


let listaClientes = [    {
  "id": 1,
  "nome": "João Silva",
  "telefone": "123-456-7890",
  "cidade": "São Paulo"
},
{
  "id": 2,
  "nome": "Maria Oliveira",
  "telefone": "987-654-3210",
  "cidade": "Rio de Janeiro"
},
{
  "id": 3,
  "nome": "Carlos Santos",
  "telefone": "555-123-4567",
  "cidade": "Belo Horizonte"
},
{
  "id": 4,
  "nome": "Ana Pereira",
  "telefone": "111-222-3333",
  "cidade": "Brasília"
},
{
  "id": 5,
  "nome": "Luiza Souza",
  "telefone": "999-888-7777",
  "cidade": "Salvador"
}];
let idGerador = 6;

function listarClientes() {
  return listaClientes;
}

function geraId() {
  return idGerador++;
}
function inserirCliente(cliente) {
    cliente.id = geraId();
    listaClientes.push(cliente);
}

function buscarClientePorId(id) {
  return listaClientes.find(function(cliente) {
    return(cliente.id === id);        
})   
}

function atualizarCliente(id, cliente) {
  for(let ind in listaClientes) {
      if(listaClientes[ind].id === id) {
          listaClientes[ind] = cliente;
          listaClientes[ind].id = id;
          return;
      }
  }
}

function deletarCliente(id) {
  for(let ind in listaClientes) {
      if(listaClientes[ind].id === id) {
          return listaClientes.splice(ind,1)[0];
      }
  }
}

  function infoCliente(clienteId) {
    const cliente = buscarClientePorId(clienteId);
    
    if (!cliente) {
      return null;
    }
  
    const listaPedidos = pedidoRepository.listarPedidos();
    
    const pedidosCliente = listaPedidos.filter(pedido => pedido.cliente_id === cliente.id);
    
    const totalGasto = pedidosCliente.reduce((total, pedido) => total + pedido.valor_total, 0);
  
    const quantidadePedidos = pedidosCliente.length;
  
    const mediaGastos = quantidadePedidos === 0 ? 0 : totalGasto / quantidadePedidos;
  
    const infoCliente = {
      totalGasto,
      quantidadePedidos,
      mediaGastos
    };
  
    return infoCliente;
  }
  

module.exports = {
  listarClientes,
  inserirCliente,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente,
  infoCliente
};
