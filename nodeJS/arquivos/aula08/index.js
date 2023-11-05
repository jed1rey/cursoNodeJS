(async () => {
    const db=require('./db')
    // console.log('Inserir novo cliente')
    // const nom = "Felipe"
    // const ida = 20
    // await db.insereCliente({nome: nom, idade:ida})
 
    // const id = 2
    // const nom = "amnnda"
    // const ida = 29
    // await db.atualizaCliente(id,{nome: nom, idade:ida})
    // console.log('cliente' + 'atualizado')

    const id = 3
    await db.deletaCliente(id)
    console.log('cliente ' + id + ' deletado');
 


    console.log('Selecionar todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)


}) ()
