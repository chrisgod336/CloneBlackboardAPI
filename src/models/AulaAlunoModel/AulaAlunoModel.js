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
class AulaAlunoModel {
    constructor(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros) {
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.lo_finalizado = lo_finalizado;
        this.nu_acertos = nu_acertos;
        this.nu_erros = nu_erros;
    }
    //buscar aula aluno
    static get(id_aluno, id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //criar aula aluno
    static post(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //atualizar aula aluno
    static put(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //deletar aulas aluno
    static deleteAll(id_aula, id_aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
}
exports.default = AulaAlunoModel;
