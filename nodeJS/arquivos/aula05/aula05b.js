// módulo fs para manipular arquivos
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT 

const server = http.createServer((req, resp) => {
    fs.appendFile('teste.txt', 'Curso de Node - CFB Cursos',(err) => { //se o arquivo existir, ele acessa, se não existir ele cria
        if(err) throw err
        console.log('arquivo criado')
   
    })
})

server.listen(porta || 3000,() => {
    console.log('Servidor rodando');
})

//criando arquivo teste.txt