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
class Aula {
    constructor(id, tx_descricao) {
        this.id = id;
        this.tx_descricao = tx_descricao;
    }
    //buscar todas as aulas
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //criar uma aula
    static post(tx_descricao) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //editar uma aula
    static put(id, tx_descricao) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //deletar uma aula
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //Deletar todas as tb_aula_aluno_questao dessa aula
            //Deletar todas as tb_aula_aluno dessa aula
            //Deletar todas as tb_aula_questao dessa aula
            //Deletar todas as tb_aula_parte dessa aula
            //Deletar a tb_aula dessa aula
            //Recalcular as questoes de todos os alunos na tb_aluno
            return {};
        });
    }
}
exports.default = Aula;
