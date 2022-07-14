const express = require("express")

const indexController = require("./app/controllers/IndexController")
const estudantesController = require("./app/controllers/EstudantesController")

const routes = express.Router();

routes.get("/" , indexController.index)
routes.get("/estudante/todos" , estudantesController.getEstudantes)
routes.get("/estudante/pegar/:id" , estudantesController.getEstudandeById)
routes.post("/estudante/criar" , estudantesController.cadastro)
routes.put("/estudantes/atualizar/:id" , estudantesController.upEstudante)
routes.delete("/estudantes/deletar/:id" , estudantesController.deletarEstudante)

module.exports = routes