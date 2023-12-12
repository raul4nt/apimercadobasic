const { Client } = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'crudMercado'
};

async function listarPedidos() {
    const cliente = new Client(conexao);
    await cliente.connect();

    const sql = "SELECT * FROM pedidos ORDER BY id";
    const result = await cliente.query(sql);
    await cliente.end();
    return result.rows;
}

async function inserirPedido(pedido) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO pedidos (produto_id, quantidade, valor_total) VALUES ($1, $2, $3) RETURNING *";
    const values = [pedido.produto_id, pedido.quantidade, pedido.valor_total];
    const result = await cliente.query(sql, values);
    cliente.end();
    return result.rows;
}

async function buscarPedidoPorId(id) {
    const cliente = new Client(conexao);
    await cliente.connect();

    const sql = "SELECT * FROM pedidos WHERE id = $1";
    const values = [id];
    const result = await cliente.query(sql, values);
    await cliente.end();
    return result.rows;
}

async function atualizarPedido(id, pedido) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE pedidos SET produto_id = $1, quantidade = $2, valor_total = $3 WHERE id = $4";
    const values = [pedido.produto_id, pedido.quantidade, pedido.valor_total, id];
    await cliente.query(sql, values);
    cliente.end();
}

async function deletarPedido(id) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM pedidos WHERE id = $1";
    const values = [id];
    await cliente.query(sql, values);
    cliente.end();
}

module.exports = {
    listarPedidos,
    inserirPedido,
    buscarPedidoPorId,
    atualizarPedido,
    deletarPedido
};
