"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controllers_1 = require("../controllers/Controllers");
const Controllers_2 = require("../controllers/Controllers");
const Controllers_3 = require("../controllers/Controllers");
const Controllers_4 = require("../controllers/Controllers");
const Controllers_5 = require("../controllers/Controllers");
const router = (0, express_1.Router)();
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
//Test Routes
router.get("/", (req, res) => {
    res.send("Teste realizado com sucesso!");
});
//Admin Routes
router.get('/admin/get', asyncHandler(Controllers_1.AdminController.get));
//Aula Routes
router.get('/aula/getAll', asyncHandler(Controllers_2.AulaContorller.getAll));
router.post('/aula/post', asyncHandler(Controllers_2.AulaContorller.post));
router.put('/aula/put', asyncHandler(Controllers_2.AulaContorller.put));
router.delete('/aula/delete', asyncHandler(Controllers_2.AulaContorller.delete));
//Aula Parte Routes
router.get('/aulaParte/getAll', asyncHandler(Controllers_3.AulaParteController.getAll));
router.post('/aulaParte/post', asyncHandler(Controllers_3.AulaParteController.post));
router.put('/aulaParte/put', asyncHandler(Controllers_3.AulaParteController.put));
//Aula Questão Routes
router.get('/aulaQuestao/getAll', asyncHandler(Controllers_4.AulaQuestaoController.getAll));
router.post('/aulaQuestao/post', asyncHandler(Controllers_4.AulaQuestaoController.post));
router.put('/aulaQuestao/put', asyncHandler(Controllers_4.AulaQuestaoController.put));
router.delete('/aulaQuestao/delete', asyncHandler(Controllers_4.AulaQuestaoController.delete));
router.delete('/aulaQuestao/deleteAll', asyncHandler(Controllers_4.AulaQuestaoController.deleteAll));
//Aula Aluno Routes
router.get('/aulaAluno/get', asyncHandler(Controllers_5.AulaAlunoController.get));
router.post('/aulaAluno/post', asyncHandler(Controllers_5.AulaAlunoController.post));
router.put('/aulaAluno/put', asyncHandler(Controllers_5.AulaAlunoController.put));
exports.default = router;
