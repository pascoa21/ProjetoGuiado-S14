const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get('/contatos/',controller.getAll)

router.post('/contatos/criar',controller.Add)

router.get('/contatos/:nome/',controller.getName)
module.exports = router