const express = require('express')
const mongoose = require('mongoose')
const app = express()

const vendedores = require('./models/vendedores')
const clientes = require('./models/clientes')
const vendas = require('./models/vendas')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {

    res.json({ message: 'hi'}) //test/depois colocar vendedores, cliente e vendas nessas rotas
})


mongoose.set("strictQuery", true);

mongoose
  .connect('mongodb+srv://lucas:244466666@clusterapi.t7we079.mongodb.net/?retryWrites=true&w=majority')

app.listen(3000) 

