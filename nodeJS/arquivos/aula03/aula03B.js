// criando rotas no servidor

const http = require('http');
const url = require('url');
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});

    const urlObj = url.parse(req.url, true);
    const parametros = urlObj.query;

    resp.write('<h1>URL da Requisicao: ' + req.url + '</h1>');
    resp.write('<p>Nome: ' + parametros.nome + '</p>');
    resp.write('<p>Curso: ' + parametros.curso + '</p>');

    resp.end();
});

servidor.listen(porta, host, () => {
    console.log('Servidor rodando');
});
