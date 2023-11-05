// aula módulo mysql2


//conexao com bd
const conectar = async () => {
    if (global.conexao && global.conexao.state != 'disconected')
    return global.conexao
    const mysql = require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:senha@localhost:3306/NodeJScurso")
    console.log('conectou ao banco')
    global.conexao = con
    return con
}

//select
const todosClientes = async() =>{
    const con=await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente')
    return await linhas
}


//insert
const insereCliente = async(cliente) =>{
    const con=await conectar()
    const sql = 'INSERT INTO cliente (nome, idade) VALUES (?,?)'
    const valores = [cliente.nome, cliente.idade]
    await con.query(sql, valores)
}


//update
const atualizaCliente = async(id, cliente) =>{
    const con=await conectar()
    const sql = 'UPDATE cliente SET nome =?, idade =? WHERE id =?'
    const valores = [cliente.nome, cliente.idade, id]
    await con.query(sql, valores)}


//delete
const deletaCliente = async(id) =>{
    const con=await conectar()
    const sql = 'DELETE FROM cliente WHERE id=?'
    const valores = [id]
    await con.query(sql, valores)}


module.exports = {todosClientes, insereCliente, atualizaCliente, deletaCliente}