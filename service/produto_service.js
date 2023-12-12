const produtoRepository = require("../repository/produto_repository");

async function listar() {
  return await produtoRepository.listarProdutos();
}

async function inserir(produto) {
  try {
    if (
      produto &&
      produto.nome &&
      produto.preco &&
      produto.disponivel
    ) {
      await produtoRepository.inserirProduto(produto);
    } else {
      throw {
        id: 400,
        message:
          "Campos inválidos. Preencha com produto_id, quantidade e valor_total",
      };
    }
  } catch (error) {
    throw {
      id: 500,
      message: "Erro na inserção",
    };
  }
}

async function buscarPorId(id) {
  const produto = await produtoRepository.buscarProdutoPorId(id);
  if (produto && produto.length > 0) {
    return produto;
  } else {
    throw { id: 404, message: "Este produto não existe" };
  }
}

async function atualizar(id, produto) {
  const produtoEncontrado = await produtoRepository.buscarProdutoPorId(id);
  if (produtoEncontrado && produtoEncontrado.length > 0) {
    if (
      produto &&
      produto.nome &&
      produto.preco &&
      produto.disponivel
    ) {
      await produtoRepository.atualizarProduto(id, produto);
    } else {
      throw {
        id: 400,
        message:
          "Campos inválidos. Preencha com produto_id, quantidade e valor_total",
      };
    }
  } else {
    throw { id: 404, message: "Este produto não existe" };
  }
}

async function deletar(id) {
  const produto = await produtoRepository.buscarProdutoPorId(id);
  if (produto && produto.length > 0) {
    await produtoRepository.deletarProduto(id);
  } else {
    throw { id: 404, message: "Produto não encontrado!" };
  }
}

async function atualizarPreco(id, novoPreco) {
  const produtoEncontrado = await produtoRepository.buscarProdutoPorId(id);
  if (produtoEncontrado && produtoEncontrado.length > 0) {
    if (novoPreco) {
      await produtoRepository.atualizarPreco(id, novoPreco);
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

async function produtoIndisponivel(id) {
  const produtoEncontrado = await produtoRepository.buscarProdutoPorId(id);
  if (produtoEncontrado && produtoEncontrado.length > 0) {
    await produtoRepository.produtoIndisponivel(id);
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
