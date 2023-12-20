const produtoRepository = require("../repository/produto_repository");
const clienteRepository = require("../repository/cliente_repository");




function getProdutos() {

  return produtoRepository.listarProdutos()

}

function getClientes() {
  return clienteRepository.listarClientes()
}

let listaProdutos = getProdutos();
let listaClientes = getClientes();





let listaPedidos = [
  {
    "id": 1,
    "produto_id": listaProdutos[0].nome_produto,
    "cliente_id": listaClientes[0].nome,
    "quantidade": 2,
    "valor_total": 3300,
    "data_pedido": "2023-12-19",
    "hora_pedido": "12:05"
},
{
    "id": 2,
    "produto_id": listaProdutos[1].nome_produto,
    "cliente_id": listaClientes[1].nome,
    "quantidade": 1,
    "valor_total": 300.00,
    "data_pedido": "2023-12-19",
    "hora_pedido": "12:45"
},
{
    "id": 3,
    "produto_id": listaProdutos[2].nome_produto,
    "cliente_id": listaClientes[2].nome,
    "quantidade": 3,
    "valor_total": 4500.00,
    "data_pedido": "2023-12-20",
    "hora_pedido": "2:15"
},
{
    "id": 4,
    "produto_id": listaProdutos[3].nome_produto,
    "cliente_id": listaClientes[3].nome,
    "quantidade": 1,
    "valor_total": 450.00,
    "data_pedido": "2023-12-20",
    "hora_pedido": "14:30"
},
{
    "id": 5,
    "produto_id": listaProdutos[4].nome_produto,
    "cliente_id": listaClientes[4].nome,
    "quantidade": 2,
    "valor_total": 500.00,
    "data_pedido": "2023-12-21",
    "hora_pedido": "9:00"
}
];

const valor_total = listaPedidos[0]

let idGerador = 6;


function geraId() {
  return idGerador++;
}


function listarPedidos() {
  return listaPedidos;
}




function calculaTotalPedido(precoUnitario, quantidade) {
  return precoUnitario * quantidade;
}

function inserirPedido(pedido) {
  pedido.id = geraId();
  pId = pedido.produto_id
  cId = pedido.cliente_id
  produtoBuscado = produtoRepository.buscarProdutoPorId(pId)
  pedido.produto_id = produtoBuscado.nome_produto
  const clienteBuscado = clienteRepository.buscarClientePorId(cId)
  pedido.cliente_id = clienteBuscado.nome
  const preco = produtoBuscado.preco
  pedido.valor_total = calculaTotalPedido(preco, pedido.quantidade);
  listaPedidos.push(pedido);
}




function buscarPedidoPorId(id) {
  return listaPedidos.find(function (pedido) {
    return (pedido.id === id);
  })
}



function atualizarPedido(id, pedido) {
  for (let ind in listaPedidos) {
    if (listaPedidos[ind].id === id) {
      listaPedidos[ind] = pedido;
      listaPedidos[ind].id = id;
      return;
    }
  }
}
  
function deletarPedido(id) {
  for (let ind in listaPedidos) {
    if (listaPedidos[ind].id === id) {
      return listaPedidos.splice(ind, 1)[0];
    }
  }
}



function pedidosCliente(clienteId) {
  const c = clienteRepository.buscarClientePorId(clienteId)
  const clientePedido = c.nome
  const pedidosDoCliente = listaPedidos.filter(pedido => pedido.cliente_id === clientePedido)
  return pedidosDoCliente;
}


module.exports = {
    listarPedidos,
    inserirPedido,
    buscarPedidoPorId,
    atualizarPedido,
    deletarPedido,
    pedidosCliente
}

