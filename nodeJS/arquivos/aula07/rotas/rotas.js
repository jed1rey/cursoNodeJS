// aula modularizando as rotas do app node.JS
const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    { 'curso': 'node', 'info': 'curso de node' },
    { 'curso': 'react', 'info': 'curso de react' },
    { 'curso': 'angular', 'info': 'curso de angular' },
    { 'curso': 'java', 'info': 'curso de java' },
    { 'curso': 'python', 'info': 'curso de python' },
]

//get
rotas.get('/', (req, res) => {
    res.json({ Ola: 'seja bem vindo' })
})

//parametros para rotas
rotas.get('/:cursoID', (req, res) => {
    const curso = req.params.cursoID
    let cursoI = cursosInfo.find(i => i.curso == curso)
    if (!cursoI) {
        res.status(400).json(
            { erro: 'curso não encontrado', cursoPesquisado: curso }
        )
    }else{
        res.status(200).json(cursoI)
    }

})
module.exports = rotas
