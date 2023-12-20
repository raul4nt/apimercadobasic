let listaProdutos = [
    {
        "id": 1,
        "nome_produto": "Smartphone",
        "marca": "Samsung",
        "preco": 999.99,
        "disponivel": true
    },
    {
        "id": 2,
        "nome_produto": "Laptop",
        "marca": "Dell",
        "preco": 1299.99,
        "disponivel": true
    },
    {
        "id": 3,
        "nome_produto": "Headphones",
        "marca": "Sony",
        "preco": 149.99,
        "disponivel": true
    },
    {
        "id": 4,
        "nome_produto": "Smartwatch",
        "marca": "Apple",
        "preco": 299.99,
        "disponivel": false
    },
    {
        "id": 5,
        "nome_produto": "Camera",
        "marca": "Canon",
        "preco": 599.99,
        "disponivel": true
    }
];

let idGerador = 6;

function geraId() {
    return idGerador++;
}

function listarProdutos() {
    return listaProdutos;
}

function inserirProduto(produto) {
    produto.id = geraId();
    listaProdutos.push(produto);
}

function buscarProdutoPorId(id) {
    return listaProdutos.find(function(produto) {
        return(produto.id === id);        
    })   
}

async function atualizarProduto(id, produto) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            listaProdutos[ind] = produto;
            listaProdutos[ind].id = id;
            return;
        }
    }
}

async function deletarProduto(id) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            return listaProdutos.splice(ind,1)[0];
        }
    }
}

function produtoIndisponivel(id) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            listaProdutos[ind].disponivel = false;
            return;
        }
    }
}
function atualizarPreco(id, novoPreco) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            listaProdutos[ind].preco = novoPreco;
            return;
        }
    }
}

// ...

module.exports = {
    listarProdutos,
    inserirProduto,
    buscarProdutoPorId,
    atualizarProduto,
    deletarProduto,
    produtoIndisponivel,
    atualizarPreco
};
