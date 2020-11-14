const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        titulo: "Agenda de Contatinhos - Reprograma",
        mensagem: "Bem Vindo API dos contatinhos",
        version: "1.0.0"
    })
})

module.exports = router