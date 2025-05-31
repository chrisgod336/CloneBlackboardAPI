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
const __1 = require("../../..");
class AulaAlunoQuestao {
    constructor(id_aluno, id_aula, id_questao, id_resposta_aluno, tx_tipo, lo_acerto) {
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.id_questao = id_questao;
        this.id_resposta_aluno = id_resposta_aluno;
        this.tx_tipo = tx_tipo;
        this.lo_acerto = lo_acerto;
    }
    //buscar questoes aula aluno
    static getAll(id_aula, id_aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql_search = `
            SELECT * FROM tb_aula_aluno_questao WHERE id_aula = ? AND id_aluno = ?;
            `;
                const response = yield __1.db.all(sql_search, [id_aula, id_aluno]);
                if (response) {
                    return {
                        success: true,
                        message: 'Questões da aula do aluno encontradas com sucesso.',
                        data: response
                    };
                }
                else {
                    throw new Error('Erro ao tentar buscar questões do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: "Erro ao tentar buscar questões do aluno."
                };
            }
        });
    }
    //criar questao aula aluno
    static post(id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_insert = `
            INSERT INTO tb_aula_aluno_questao (id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto)
            VALUES (?, ?, ?, ?, ?, ?);
            `;
                const response = yield __1.db.run(sql_insert, [id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto]);
                if (response) {
                    // const res:any = await Aluno.recalculate();
                    // if(res?.success){
                    return {
                        success: true,
                        message: 'Questão do aluno criada com sucesso.'
                    };
                    // }else{
                    //     throw new Error(res?.message??'Erro ao tentar recalular questões dos alunos.')
                    // }
                }
                else {
                    throw new Error('Erro ao  tentar criar questão do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar criar questão do aluno."
                };
            }
        });
    }
    //atualizar questao aula aluno
    static put(id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_update = `
            UPDATE tb_aula_aluno_questao
            SET id_resposta_aluno = ?, tx_tipo = ?, lo_acerto = ?
            WHERE id_aula = ? AND id_aluno = ? AND id_questao = ?;
            `;
                const response = yield __1.db.run(sql_update, [id_resposta_aluno, tx_tipo, lo_acerto, id_aula, id_aluno, id_questao]);
                if (response) {
                    // const res:any = await Aluno.recalculate();
                    // if(res?.success){
                    return {
                        success: true,
                        message: 'Questão do aluno atualizada com sucesso.'
                    };
                    // }else{
                    //     throw new Error(res?.message??'Erro ao tentar recalular questões dos alunos.')
                    // }
                }
                else {
                    throw new Error('Erro ao tentar atualizar questão do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar atualizar questão do aluno."
                };
            }
        });
    }
    //deletar todas as questao aula aluno
    static deleteAll(id_aula, id_aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_delte = `
            DELETE FROM tb_aula_aluno_questao WHERE id_aula = ? AND id_aluno = ?;
            `;
                const response = yield __1.db.run(sql_delte, [id_aula, id_aluno]);
                if (response) {
                    // const res:any = await Aluno.recalculate();
                    // if(res?.success){
                    return {
                        success: true,
                        message: 'Questões do aluno deletadas com sucesso.'
                    };
                    // }else{
                    //     throw new Error(res?.message??'Erro ao tentar recalular questões dos alunos.')
                    // }
                }
                else {
                    throw new Error('Erro ao  tentar deletar questões do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar deletar questões do aluno."
                };
            }
        });
    }
}
exports.default = AulaAlunoQuestao;
