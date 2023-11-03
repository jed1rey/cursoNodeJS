// módulo fs para manipular arquivos
const http = require('http');
const fs = require('fs');
const porta = process.env.PORT || 3000;

const server = http.createServer((req, resp) => {
    fs.readFile('site.html', (err, arquivo) => {
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.write(arquivo); 
        return resp.end();
    });
});

server.listen(porta, () => {
    console.log('Servidor rodando');
});
