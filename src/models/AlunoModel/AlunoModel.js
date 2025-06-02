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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../..");
const AgentModel_1 = __importDefault(require("../Agents/AgentModel"));
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
    getId() {
        return this.id;
    }
    getTxNome() {
        return this.tx_nome;
    }
    getTxLogin() {
        return this.tx_login;
    }
    getTxNivel() {
        return this.tx_nivel;
    }
    getNuAcertosTexto() {
        return this.nu_acertos_texto;
    }
    getNuErrosTexto() {
        return this.nu_erros_texto;
    }
    getNuAcertosImagem() {
        return this.nu_acertos_imagem;
    }
    getNuErrosImagem() {
        return this.nu_erros_imagem;
    }
    getNuAcertosVideo() {
        return this.nu_acertos_video;
    }
    getNuErrosVideo() {
        return this.nu_erros_video;
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
            var _a, _b, _c;
            try {
                const sql_search = `SELECT * FROM tb_aluno WHERE id = ?`;
                const response = yield __1.db.all(sql_search, [id]);
                if (response && response.length) {
                    const alunoData = response[0];
                    const texto = {
                        acertos: (alunoData === null || alunoData === void 0 ? void 0 : alunoData.nu_acertos_texto) | 0,
                        erros: (alunoData === null || alunoData === void 0 ? void 0 : alunoData.nu_erros_texto) | 0,
                    };
                    const imagem = {
                        acertos: (alunoData === null || alunoData === void 0 ? void 0 : alunoData.nu_acertos_imagem) | 0,
                        erros: (alunoData === null || alunoData === void 0 ? void 0 : alunoData.nu_erros_imagem) | 0,
                    };
                    const video = {
                        acertos: (alunoData === null || alunoData === void 0 ? void 0 : alunoData.nu_acertos_video) | 0,
                        erros: (alunoData === null || alunoData === void 0 ? void 0 : alunoData.nu_erros_video) | 0,
                    };
                    // ##AGENTE GESTOR##//
                    const res = yield AgentModel_1.default.Gestor({
                        imagem: imagem,
                        texto: texto,
                        video: video
                    });
                    if ((res === null || res === void 0 ? void 0 : res.success) && (res === null || res === void 0 ? void 0 : res.data)) {
                        const tx_nivel = res.data.tx_nivel;
                        if (tx_nivel) {
                            const sql_update = `
                        UPDATE tb_aluno
                        SET tx_nivel = ?
                        WHERE id = ?
                        `;
                            yield __1.db.run(sql_update, [tx_nivel, id]);
                        }
                        return {
                            success: true,
                            message: 'Aluno encontrado com sucesso.',
                            data: Object.assign(Object.assign({}, alunoData), { feedback: (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.feedback })
                        };
                    }
                    else {
                        throw new Error((_b = res === null || res === void 0 ? void 0 : res.message) !== null && _b !== void 0 ? _b : 'Erro ao tentar buscar dados do agente Avalidor');
                    }
                }
                else {
                    throw new Error('Erro ao tentar buscar dados do aluno.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_c = error === null || error === void 0 ? void 0 : error.message) !== null && _c !== void 0 ? _c : "Erro ao tentar buscar dados do aluno."
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
}
exports.default = Aluno;
