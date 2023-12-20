const produtoRepository = require("../repository/produto_repository");

 function listar() {
  return  produtoRepository.listarProdutos();
}

function inserir(produto) {
    if (produto && produto.nome_produto && produto.preco && produto.marca     
    ) {
      produtoRepository.inserirProduto(produto);
    } else {
      throw {
        id: 400,
        message:
          "Campos inválidos. Preencha com nome_produto, marca e preço!",
      };
    }
}

 function buscarPorId(id) {
  const produto =  produtoRepository.buscarProdutoPorId(id);
  if (produto ) {
    return produto;
  } else {
    throw { id: 404, message: "Este produto não existe" };
  }
}

 function atualizar(id, produto) {
  const produtoEncontrado =  produtoRepository.buscarProdutoPorId(id);
  if (!produtoEncontrado) {
    throw {id: 404, message: "Produto nao encontrado"};
   }
    if ( produto && produto.nome_produto && produto.marca && produto.preco) {
       produtoRepository.atualizarProduto(id, produto);
    } else {
      throw {
        id: 400, message:"Campos inválidos. Preencha com nome_produto, marca e preço!",
      };
    }
}


 function deletar(id) {
  const produtoDeletado = produtoRepository.deletarProduto(id);
  if(produtoDeletado){
    return produtoDeletado;
  }
  else {
    throw {id: 404, message: "Produto nao encontrado"};
  }
}


 function atualizarPreco(id, novoPreco) {
  const produtoEncontrado =  produtoRepository.buscarProdutoPorId(id);
  if (produtoEncontrado) {
    if (
      novoPreco &&
      novoPreco.preco
    ) {
       produtoRepository.atualizarPreco(id, novoPreco);
    } else {
      throw {
        id: 400,
        message:
          "Informe o novo preço!",
      };
    }
  } else {
    throw { id: 404, message: "Este produto não existe" };
  }
}

 function produtoIndisponivel(id) {
  const produtoEncontrado =  produtoRepository.buscarProdutoPorId(id);
  if (produtoEncontrado) {
     produtoRepository.produtoIndisponivel(id);
  } else {
    throw { id: 404, message: "Este produto não existe" };
  }
}

module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar,
  atualizarPreco,
  produtoIndisponivel,
};
