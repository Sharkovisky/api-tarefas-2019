const express = require('express')
const route = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require('../util/categoriaValidation')

route.put('/:id',           apiController.verificar,    categoriaValidation.alterar,                categoriaController.alterar)
route.delete('/:id',        apiController.verificar,    categoriaValidation.deletar,                categoriaController.deletar)
route.get('/:id',           apiController.verificar,    categoriaValidation.listarPorId,            categoriaController.listarPorId)
route.post('/',             apiController.verificar,    categoriaValidation.inserir,                categoriaController.inserir)

module.exports = route

