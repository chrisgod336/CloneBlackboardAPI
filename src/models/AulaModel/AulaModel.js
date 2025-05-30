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
class Aula {
    constructor(id, tx_descricao) {
        this.id = id;
        this.tx_descricao = tx_descricao;
    }
    //buscar todas as aulas
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_search = `
            SELECT * 
                FROM tb_aula
                ORDER BY id 
            `;
                const response = yield __1.db.all(sql_search);
                if (response) {
                    return {
                        success: true,
                        message: 'Aulas encontradas com sucesso.',
                        data: response
                    };
                }
                else {
                    throw new Error('Erro ao tentar buscar as aulas.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Error ao tentar buscar aulas.'
                };
            }
        });
    }
    //buscar aula
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_search = `
            SELECT * 
                FROM tb_aula
                WHERE id = ?
            `;
                const response = yield __1.db.all(sql_search, [id]);
                if (response[0]) {
                    return {
                        success: true,
                        message: 'Aula encontrada com sucesso.',
                        data: response[0]
                    };
                }
                else {
                    throw new Error('Erro ao tentar buscar as aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Error ao tentar buscar aula.'
                };
            }
        });
    }
    //criar uma aula
    static post(tx_descricao) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_insert = `
            INSERT INTO tb_aula(tx_descricao) 
                VALUES(?);
            `;
                const response = yield __1.db.run(sql_insert, [tx_descricao]);
                if (response === null || response === void 0 ? void 0 : response.lastID) {
                    return {
                        success: true,
                        message: 'Aula criada com sucesso.',
                        data: {
                            id: response.lastID
                        }
                    };
                }
                else {
                    throw new Error('Erro ao tentar criar a aula');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar criar a aula'
                };
            }
        });
    }
    //editar uma aula
    static put(id, tx_descricao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql_update = `
            UPDATE tb_aula
                SET tx_descricao = ?
                WHERE id = ?
            `;
                const response = yield __1.db.run(sql_update, [tx_descricao, id]);
                if (response) {
                    return {
                        success: true,
                        message: 'Dados da aula editados com sucesso.'
                    };
                }
                else {
                    throw new Error('Erro ao tentar editar dados da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: 'Erro ao tentar editar dados da aula.'
                };
            }
        });
    }
    //deletar uma aula
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const queries = [
                    `DELETE FROM tb_aula_aluno_questao WHERE id_aula = ?`,
                    `DELETE FROM tb_aula_aluno WHERE id_aula = ?`,
                    `DELETE FROM tb_aula_questao WHERE id_aula = ?`,
                    `DELETE FROM tb_aula_parte WHERE id_aula = ?`,
                    `DELETE FROM tb_aula WHERE id = ?`
                ];
                for (const query of queries) {
                    yield __1.db.run(query, [id]);
                }
                // const res:any = await Aluno.recalculate();
                // if (res?.success) {
                return {
                    success: true,
                    message: 'Aula deletada com sucesso.'
                };
                // } else {
                //     return {
                //         success: false,
                //         message: 'Aula deletada, mas houve um erro ao recalcular as questões dos alunos.'
                //     };
                // }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao deletar aula.'
                };
            }
        });
    }
}
exports.default = Aula;
