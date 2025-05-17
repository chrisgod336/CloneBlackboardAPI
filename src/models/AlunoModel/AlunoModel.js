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
class Aluno {
    constructor(id, tx_nome, tx_login, tx_senha, tx_nivel, nu_acertos_texto, nu_erros_texto, nu_acertos_imagem, nu_erros_imagem, nu_acertos_video, nu_erros_video) {
        this.id = id;
        this.tx_nome = tx_nome;
        this.tx_login = tx_login;
        this.tx_senha = tx_senha;
        this.tx_nivel = tx_nivel;
        this.nu_acertos_texto = nu_acertos_texto;
        this.nu_erros_texto = nu_erros_texto;
        this.nu_acertos_imagem = nu_acertos_imagem;
        this.nu_erros_imagem = nu_erros_imagem;
        this.nu_acertos_video = nu_acertos_video;
        this.nu_erros_video = nu_erros_video;
    }
    //buscar dados do aluno
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //buscar dados dos alunos
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //criar aluno
    static post(tx_nome, tx_login) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //atualizar aluno
    static put(id, tx_nome, tx_login, tx_nivel, tx_nu_acertos_texto, tx_nu_erros_texto, tx_nu_acertos_imagem, tx_nu_erros_imagem, tx_nu_acertos_video, tx_nu_erros_video) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //deletar aluno
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
            //Deletar todos os registro do aluno da tb_aula_aluno_questao
            //Deletar todos os registro do aluno da tb_aula_aluno
            //Deletar registro do aluno da tb_aluno
            };
        });
    }
    //recalcular questoes de todos alunos
    static recalculate() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                success: true,
                message: 'Questões dos alunos recalculadas com sucesso.'
            };
        });
    }
}
exports.default = Aluno;
