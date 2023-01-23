const mongoose = require('mongoose')

const clientes = mongoose.model('clientes', {
    nomecliente: String,
    endereço: String,
    vendedor: String, //deve estar vinculado ao grupo de vendedores

})

module.exports = clientes