// criando rotas no servidor

const http = require('http');
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((req, resp) =>{
    resp.writeHead(200,{'Content-Type': 'text/html'});
    if(req.url=='/'){
        resp.write('<h1>Seja bem vindo</h1>') //rota 1
    }else if(req.url == '/canal'){ //rota 2
        resp.write('<h1> CFB cursos</h1>');
    }if(req.url =='/curso'){
        resp.write('<h1>Curso de node</h1>'); //rota 3
    }
    resp.end();
});

servidor.listen(porta, host, () => {
    console.log('Servidor rodando');
});