const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const porta = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
    if (req.url === '/envioDeArquivo' && req.method.toLowerCase() === 'post') {
        const form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, 'uploads'); // Define o diretório de upload

        form.parse(req, (erro, campos, arquivos) => {
            if (erro) {
                console.error(erro);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Erro no upload do arquivo');
                res.end();
                return;
            }

            if (!arquivos.filetoupload) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.write('Nenhum arquivo foi enviado');
                res.end();
                return;
            }

            const urlantiga = arquivos.filetoupload.path;
            const urlnova = path.join(__dirname, 'uploads', arquivos.filetoupload.name);

            fs.rename(urlantiga, urlnova, (erro) => {
                if (erro) {
                    console.error(erro);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('Erro ao salvar o arquivo');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('Arquivo enviado e salvo com sucesso');
                    res.end();
                }
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="/envioDeArquivo" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"> <br>');
        res.write('<input type="submit" value="Enviar">');
        res.write('</form>');
        res.end();
    }
});

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
