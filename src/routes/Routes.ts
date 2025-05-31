import { Router } from "express";

import { AdminController } from "../controllers/Controllers";
import { AulaContorller } from "../controllers/Controllers";
import { AulaParteController } from "../controllers/Controllers";
import { AulaQuestaoController } from "../controllers/Controllers";
import { AulaAlunoController } from "../controllers/Controllers";
import { AlunoController } from "../controllers/Controllers";
import { AulaAlunoQuestaoController } from "../controllers/Controllers";

const router = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

//Test Routes
router.get("/", (req: any, res: any) => {
    res.send("Teste realizado com sucesso!");
});

//Admin Routes
router.get('/admin/get', asyncHandler(AdminController.get));

//Aula Routes
router.get('/aula/getAll', asyncHandler(AulaContorller.getAll));
router.get('/aula/get', asyncHandler(AulaContorller.get));
router.post('/aula/post', asyncHandler(AulaContorller.post));
router.put('/aula/put', asyncHandler(AulaContorller.put));
router.delete('/aula/delete', asyncHandler(AulaContorller.delete));

//Aula Parte Routes
router.get('/aulaParte/getAll', asyncHandler(AulaParteController.getAll));
router.post('/aulaParte/post', asyncHandler(AulaParteController.post));
router.put('/aulaParte/put', asyncHandler(AulaParteController.put));

//Aula Questão Routes
router.get('/aulaQuestao/getAll', asyncHandler(AulaQuestaoController.getAll));
router.post('/aulaQuestao/post', asyncHandler(AulaQuestaoController.post));
router.put('/aulaQuestao/put', asyncHandler(AulaQuestaoController.put));
router.delete('/aulaQuestao/delete', asyncHandler(AulaQuestaoController.delete));
router.delete('/aulaQuestao/deleteAll', asyncHandler(AulaQuestaoController.deleteAll));

//Aula Aluno Routes
router.get('/aulaAluno/get', asyncHandler(AulaAlunoController.get));
router.post('/aulaAluno/post', asyncHandler(AulaAlunoController.post));
router.put('/aulaAluno/put', asyncHandler(AulaAlunoController.put));
router.get('/aulaAluno/make', asyncHandler(AulaAlunoController.make));

//Aluno Routes
router.get('/aluno/login', asyncHandler(AlunoController.login));
router.get('/aluno/getAll', asyncHandler(AlunoController.getAll));
router.get('/aluno/get', asyncHandler(AlunoController.get));
router.post('/aluno/post', asyncHandler(AlunoController.post));
router.put('/aluno/put', asyncHandler(AlunoController.put));
router.delete('/aluno/delete', asyncHandler(AlunoController.delete))
//router.put('/aluno/recalculate', asyncHandler(AlunoController.recalculate));

//Aula Aluno Questão Routes
router.get('/aulaAlunoQuestao/getAll', asyncHandler(AulaAlunoQuestaoController.getAll));
router.post('/aulaAlunoQuestao/post', asyncHandler(AulaAlunoQuestaoController.post));
router.put('/aulaAlunoQuestao/put', asyncHandler(AulaAlunoQuestaoController.put));
router.delete('/aulaAlunoQuestao/deleteAll', asyncHandler(AulaAlunoQuestaoController.deleteAll))

export default router;