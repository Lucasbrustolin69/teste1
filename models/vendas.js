const mongoose = require('mongoose')

const vendas = mongoose.model('vendas', {
    cliente: String, //deve estar vinculado ao registro de clientes
    vendedor: String, //deve estar vinculado ao grupo de vendedores
    datacompra: Date,
    valorcompra: Number,
    formapagamento: String,

})

module.exports = vendas