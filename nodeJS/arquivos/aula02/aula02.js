//criando um servidor simples 

const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain' //tipo de retorno - texto comum - 200 - server ok - rodar texto
    });
    response.write('CFB Cursos\n'); //resposta visivel usuário
    response.end();
}).listen(1337);  //numero porta que sera executado

//site http.cat - respostas http