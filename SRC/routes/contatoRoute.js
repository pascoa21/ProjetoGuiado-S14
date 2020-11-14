const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

//retorna todos os contatos
router.get('/contatos/',controller.getAll)
//criar um novo contato
router.post('/contatos/criar',controller.Add)
//busca contato e retorna por nome
router.get('/contatos/:nome/',controller.getName)
//busca contato por ID
router.get('/contatos/:id/',controller.getById)
//exclui contato
router.delete('/deletar/:id/',controller.deleteContact)
//modifica o numero do celular
router.put('/atualizar/telefone/:id', controller.UpNumberPhone)
//modifica todo cadastro
router.put('/atualizar/:id',controller.upContato)

module.exports = router