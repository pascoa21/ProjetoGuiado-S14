const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())

const index = require('./routes/index')
const contatos = require('./routes/contatoRoute')

app.use('/', ROTA)
app.use('/contatos', ROTA)

module.exports = app
    
