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
class AulaQuestao {
    constructor(id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta) {
        this.id = id;
        this.id_aula = id_aula;
        this.id_parte = id_parte;
        this.tx_descricao = tx_descricao;
        ;
        this.tx_alternativas = tx_alternativas;
        this.id_resposta = id_resposta;
    }
    //buscas questoes da aula
    static getAll(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_search = `
            SELECT * FROM tb_aula_questao WHERE id_aula = ? ORDER BY id_parte, id;
            `;
                const response = yield __1.db.all(sql_search, [id_aula]);
                if (response) {
                    return {
                        success: true,
                        message: 'Questões da aula encontradas com sucesso.',
                        data: response
                    };
                }
                else {
                    throw new Error('Erro ao tentar buscar questões da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar buscar questões da aula."
                };
            }
        });
    }
    //criar questao da aula
    static post(id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_inset = `
            INSERT INTO tb_aula_questao (id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta)
            VALUES (?, ?, ?, ?, ?);
            `;
                const response = yield __1.db.run(sql_inset, [id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta]);
                if (response === null || response === void 0 ? void 0 : response.lastID) {
                    return {
                        success: true,
                        message: 'Questão da aula criada com sucesso.',
                        data: {
                            id: response.lastID
                        }
                    };
                }
                else {
                    throw new Error('Erro ao tentar criar questão da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar criar questão da aula."
                };
            }
        });
    }
    //atualizar questao da aula
    static put(id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_update = `
            UPDATE tb_aula_questao 
            SET id_parte = ?, tx_descricao = ?, tx_alternativas = ?, id_resposta = ?
            WHERE id_aula = ? AND id = ?
            `;
                const response = yield __1.db.run(sql_update, [id_parte, tx_descricao, tx_alternativas, id_resposta, id_aula, id]);
                if (response) {
                    return {
                        success: true,
                        message: 'Questão da aula atualizada com sucesso.'
                    };
                }
                else {
                    throw new Error('Erro ao tentar atualizar questão da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar editar questão da aula."
                };
            }
        });
    }
    //deletar questao da aula
    static delete(id, id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_delete = `
            DELETE FROM tb_aula_questao
            WHERE id=? AND id_aula = ?
            `;
                const response = yield __1.db.run(sql_delete, [id, id_aula]);
                if (response) {
                    return {
                        success: true,
                        message: 'Questão da aula deletada com sucesso.'
                    };
                }
                else {
                    throw new Error('Erro ao tentar deletar questão da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar deletar questão da aula."
                };
            }
        });
    }
    //deletar questoes da aula
    static deleteAll(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_delete = `
            DELETE FROM tb_aula_questao
            WHERE id_aula = ?
            `;
                const response = yield __1.db.run(sql_delete, [id_aula]);
                if (response) {
                    return {
                        success: true,
                        message: 'Questões da aula deletadas com sucesso.'
                    };
                }
                else {
                    throw new Error('Erro ao tentar deletar questões da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar deletar questões da aula."
                };
            }
        });
    }
}
exports.default = AulaQuestao;
