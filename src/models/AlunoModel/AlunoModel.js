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
    //login do aluno
    static login(tx_login, tx_senha) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const sql_search = `SELECT id FROM tb_aluno WHERE tx_login = ? AND tx_senha = ? LIMIT 1`;
                const response = yield __1.db.all(sql_search, [tx_login, tx_senha]);
                if (response.length > 0 && ((_a = response[0]) === null || _a === void 0 ? void 0 : _a.id) && ((_b = response[0]) === null || _b === void 0 ? void 0 : _b.id) > 0) {
                    const id = (_c = response[0]) === null || _c === void 0 ? void 0 : _c.id;
                    const obj = yield this.get(id);
                    if (obj === null || obj === void 0 ? void 0 : obj.success) {
                        return obj;
                    }
                    else {
                        return { success: false, message: (_d = obj === null || obj === void 0 ? void 0 : obj.message) !== null && _d !== void 0 ? _d : "Erro ao buscar aluno" };
                    }
                }
                else {
                    return { success: false, mensagem: "Login ou senha inválidos" };
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_e = error === null || error === void 0 ? void 0 : error.message) !== null && _e !== void 0 ? _e : "Erro ao tentar logar com aluno."
                };
            }
        });
    }
    //buscar dados do aluno
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_search = `SELECT * FROM tb_aluno WHERE id = ?`;
                const response = yield __1.db.all(sql_search, [id]);
                //##AGENTE GESTOR##//
                const feedback = 'O aluno está tendo um bom desempenho de aprendizando com textos e imagens, porém vem apresentando défities de aprendizados com vídeos. Mesmo assim o aluno está acima da média e apresenta um bom desempenho geral.';
                if (response && response.length) {
                    return {
                        success: true,
                        message: 'Aluno encontrado com sucesso.',
                        data: Object.assign(Object.assign({}, response[0]), { feedback: feedback })
                    };
                }
                else {
                    throw new Error('Erro ao tentar buscar dados do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Erro ao tentar buscar dados do aluno."
                };
            }
        });
    }
    //buscar dados dos alunos
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_search = "SELECT * FROM tb_aluno ORDER BY id";
                const response = yield __1.db.all(sql_search);
                if (response) {
                    return {
                        success: true,
                        message: 'Alunos encontrados com sucesso.',
                        data: response
                    };
                }
                else {
                    throw new Error('Erro ao tentar buscar alunos.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar buscar alunos.',
                };
            }
        });
    }
    //criar aluno
    static post(tx_nome, tx_login) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_insert = `INSERT INTO tb_aluno (tx_nome, tx_login) VALUES (?,?)`;
                const response = yield __1.db.run(sql_insert, [tx_nome, tx_login]);
                if (response === null || response === void 0 ? void 0 : response.lastID) {
                    return {
                        success: true,
                        message: 'Aluno criado com sucesso.',
                        data: { id: response.lastID }
                    };
                }
                else {
                    throw new Error('Erro ao tentar criar aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar criar aluno.',
                };
            }
        });
    }
    //atualizar aluno
    static put(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const fieldsToUpdate = [];
                const values = [];
                Object.entries(updateData).forEach(([key, value]) => {
                    if (value !== undefined && value !== null) {
                        fieldsToUpdate.push(`${key} = ?`);
                        values.push(value);
                    }
                });
                if (fieldsToUpdate.length === 0) {
                    return {
                        success: false,
                        message: 'Nenhum campo fornecido para atualização.'
                    };
                }
                const sql_update = `
                UPDATE tb_aluno 
                SET ${fieldsToUpdate.join(', ')}
                WHERE id = ?`;
                values.push(id);
                const response = yield __1.db.run(sql_update, values);
                if (response) {
                    return {
                        success: true,
                        message: 'Aluno atualizado com sucesso.',
                    };
                }
                else {
                    throw new Error('Erro ao tentar editar aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar editar aluno.'
                };
            }
        });
    }
    //deletar aluno
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const queries = [
                    `DELETE FROM tb_aula_aluno_questao WHERE id_aluno = ?`,
                    `DELETE FROM tb_aula_aluno WHERE id_aluno = ?`,
                    `DELETE FROM tb_aluno WHERE id = ?`
                ];
                for (const query of queries) {
                    yield __1.db.run(query, [id]);
                }
                return {
                    success: true,
                    message: 'Aluno deletado com sucesso.',
                };
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar deletar aluno.',
                };
            }
        });
    }
    //recalcular questoes de todos alunos
    static recalculate() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            try {
                const sql_search = `SELECT id FROM tb_aluno`;
                const response = yield __1.db.all(sql_search);
                if (response) {
                    for (const aluno of response) {
                        const id = aluno === null || aluno === void 0 ? void 0 : aluno.id;
                        if (id) {
                            const sql_count = `
                        SELECT 
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'S' AND tx_tipo = 'texto') AS nu_acertos_texto,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'N' AND tx_tipo = 'texto') AS nu_erros_texto,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'S' AND tx_tipo = 'imagem') AS nu_acertos_imagem,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'N' AND tx_tipo = 'imagem') AS nu_erros_imagem,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'S' AND tx_tipo = 'video') AS nu_acertos_video,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'N' AND tx_tipo = 'video') AS nu_erros_video
                        `;
                            const response_count = yield __1.db.all(sql_count, [id, id, id, id, id, id]);
                            if (response_count && response_count.length) {
                                const nu_acertos_texto = (_b = (_a = response_count[0]) === null || _a === void 0 ? void 0 : _a.nu_acertos_texto) !== null && _b !== void 0 ? _b : 0;
                                const nu_erros_texto = (_d = (_c = response_count[0]) === null || _c === void 0 ? void 0 : _c.nu_erros_texto) !== null && _d !== void 0 ? _d : 0;
                                const nu_acertos_imagem = (_f = (_e = response_count[0]) === null || _e === void 0 ? void 0 : _e.nu_acertos_imagem) !== null && _f !== void 0 ? _f : 0;
                                const nu_erros_imagem = (_h = (_g = response_count[0]) === null || _g === void 0 ? void 0 : _g.nu_erros_imagem) !== null && _h !== void 0 ? _h : 0;
                                const nu_acertos_video = (_k = (_j = response_count[0]) === null || _j === void 0 ? void 0 : _j.nu_acertos_video) !== null && _k !== void 0 ? _k : 0;
                                const nu_erros_video = (_m = (_l = response_count[0]) === null || _l === void 0 ? void 0 : _l.nu_erros_video) !== null && _m !== void 0 ? _m : 0;
                                const sql_update = `
                            UPDATE tb_aluno 
                            SET nu_acertos_texto = ?, nu_erros_texto = ?, nu_acertos_imagem = ?, nu_erros_imagem = ?, nu_acertos_video = ?, nu_erros_video = ?
                            `;
                                const response_update = yield __1.db.run(sql_update, [nu_acertos_texto, nu_erros_texto, nu_acertos_imagem, nu_erros_imagem, nu_acertos_video, nu_erros_video]);
                            }
                        }
                    }
                }
                return {
                    success: true,
                    message: 'Questões dos alunos recalculadas com sucesso.'
                };
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_o = error === null || error === void 0 ? void 0 : error.message) !== null && _o !== void 0 ? _o : 'Erro ao tentar recalcular questões dos alunos.',
                };
            }
        });
    }
}
exports.default = Aluno;
