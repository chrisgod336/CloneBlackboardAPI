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
class AulaAluno {
    constructor(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3) {
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.lo_finalizado = lo_finalizado;
        this.nu_acertos = nu_acertos;
        this.nu_erros = nu_erros;
        this.tx_parte1 = tx_parte1;
        this.tx_parte2 = tx_parte2;
        this.tx_parte3 = tx_parte3;
    }
    //buscar aula aluno
    static get(id_aluno, id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_search = `
            SELECT * FROM tb_aula_aluno WHERE id_aluno = ? AND id_aula = ?;
            `;
                const response = yield __1.db.all(sql_search, [id_aluno, id_aula]);
                if (response && response.length) {
                    return {
                        success: true,
                        message: 'Aula do aluno encontrada com sucesso.',
                        data: response[0]
                    };
                }
                else {
                    throw new Error("Aula do aluno não encontrada.");
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao buscar aula do aluno."
                };
            }
        });
    }
    //criar aula aluno
    static post(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_insert = `
            INSERT INTO tb_aula_aluno (id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
            `;
                const response = yield __1.db.run(sql_insert, [id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3]);
                if (response) {
                    return {
                        success: true,
                        message: 'Aula do aluno criada com sucesso'
                    };
                }
                else {
                    throw new Error("Erro ao tentar criar aula do aluno.");
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar criar aula do aluno."
                };
            }
        });
    }
    //atualizar aula aluno
    static put(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_update = `
            UPDATE tb_aula_aluno
                SET lo_finalizado = ?, nu_acertos = ?, nu_erros = ?, tx_parte1 = ?, tx_parte2 = ?, tx_parte3 = ?
                WHERE id_aluno = ? AND id_aula = ?;
            `;
                const response = yield __1.db.run(sql_update, [lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3, id_aluno, id_aula]);
                if (response) {
                    return {
                        success: true,
                        message: 'Aula do aluno editada com sucesso.'
                    };
                }
                else {
                    throw new Error('Erro ao tentar editar aula do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar editar aula do aluno."
                };
            }
        });
    }
    //Monta aula para o aluno
    static make(id_aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                //Verifica se a aula ja existe, se já manda para o Avalidar, se não para o tutor
                /** CHAMADA DO AGENTE TUTOR **/
                const aula = {
                    tx_parte1: 'texto',
                    tx_parte2: 'imagem',
                    tx_parte3: 'video',
                };
                return {
                    success: true,
                    message: 'Aula do aluno montada com sucesso',
                    data: aula
                };
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar montar aula do aluno."
                };
            }
        });
    }
}
exports.default = AulaAluno;
