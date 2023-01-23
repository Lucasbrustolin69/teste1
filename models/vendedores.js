const mongoose = require('mongoose')

const vendedores = mongoose.model('vendedores', {
    nome: String,
    contratado: Date,
    comissão: String,
    entrada: Number,
    saida: Number,   

})

module.exports = vendedores