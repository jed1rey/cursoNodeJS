// aula: trabalhando com eventos
const http = require('http')
const eventos = require('events')
const eventoEmissor = new eventos.EventEmitter()

const final = () => {console.log('fim do processo')}
eventoEmissor.on('msg', () => {console.log('curso de node')})
eventoEmissor.on('fim', final) 

const porta = process.env.PORT || 3000
const retorno = () => {console.log('servidor rodando')}
const servidor = http.createServer((req, res) => {
    eventoEmissor.emit('msg')
    res.writeHead(200, {'content-Type' : 'text/plain'})
    res.write('CFB cursos')
    eventoEmissor.emit('fim')
    res.end()

})

servidor.listen(porta, retorno)