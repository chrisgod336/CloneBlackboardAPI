"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AulaAlunoQuestaoModel {
    constructor(id_aluno, id_aula, id_questao, id_resposta, lo_acerto) {
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.id_questao = id_questao;
        this.id_resposta = id_resposta;
        this.lo_acerto = lo_acerto;
    }
    //buscar questoes aula aluno
    static get(id_aula, id_aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //criar questao aula aluno
    static create(id_aula, id_aluno, id_questao, id_resposta, lo_acerto) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
            //Criar tb_aula_aluno_questao
            //Adicionar questao no historico do aluno
            };
        });
    }
    //atualizar questao aula aluno
    static put(id_aula, id_aluno, id_questao, id_resposta, lo_acerto) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
            //Atualizar tb_aula_aluno_questao
            //Atualizar questao no historico do aluno
            };
        });
    }
    //deletar questoes da aula aluno
    static deleteAll(id_aluno, id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
}
exports.default = AulaAlunoQuestaoModel;
