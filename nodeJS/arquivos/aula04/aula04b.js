//rotas com

const express = require('express')
const app = express()
const porta=process.env.PORT

app.get('/', (req, res) => {
    res.send('welcome')
})
app.get('/canal',(req,res)=> {
    res.json({canal: 'cfb cursos'})
})

app.listen(porta || 3000,() => {
    console.log('Servidor rodando')

})


//npm install express