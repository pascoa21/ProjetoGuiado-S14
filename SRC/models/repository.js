const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:9101/contato-reprograma'

const connect = () =>{
    mongoose.connection(DB_URL, { useUnifiedTopology: true})
    const connection = mongoose.connection
    connection.on('error', () => console.error("Erro de conexão"))
    connection.once('open',() => console.log("Banco de dados acessado"))
}

module.exports = connect