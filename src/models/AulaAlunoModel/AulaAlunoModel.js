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
const AlunoModel_1 = __importDefault(require("../AlunoModel/AlunoModel"));
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
    static make(id_aluno, id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            try {
                //Verifica se a aula ja existe, se já manda para o Avalidar, se não para o tutor
                if (id_aula) {
                    //Buscar dados das questões da aula
                    const sql_search1 = `
                SELECT id_resposta_aluno, tx_tipo
                    FROM tb_aula_aluno_questao
                    WHERE id_aula = ? AND id_aluno = ?
                    ORDER BY id_questao
                    LIMIT 15;
                `;
                    const response1 = yield __1.db.all(sql_search1, [id_aula, id_aluno]);
                    const sql_search2 = `
                SELECT id_resposta
                    FROM tb_aula_questao
                    WHERE id_aula = ?
                    ORDER BY id
                    LIMIT 15;
                `;
                    const response2 = yield __1.db.all(sql_search2, [id_aula]);
                    if (response1 && (response1 === null || response1 === void 0 ? void 0 : response1.length) == 15 && response2 && (response2 === null || response2 === void 0 ? void 0 : response2.length) == 15) {
                        const questoes = response1 === null || response1 === void 0 ? void 0 : response1.map((item, index) => {
                            const questaoAula = response2[index];
                            return {
                                resposta_correta: questaoAula === null || questaoAula === void 0 ? void 0 : questaoAula.id_resposta.toString(),
                                resposta_aluno: item === null || item === void 0 ? void 0 : item.id_resposta_aluno.toString(),
                                tipo: item === null || item === void 0 ? void 0 : item.tx_tipo
                            };
                        });
                        /** CHAMADA DO AGENTE AVALIDOR **/
                        const res = yield AgentModel_1.default.Avaliador({ questoes: questoes });
                        const partes = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.partes) === null || _b === void 0 ? void 0 : _b.partes;
                        if ((res === null || res === void 0 ? void 0 : res.success) && (res === null || res === void 0 ? void 0 : res.data)) {
                            return {
                                success: true,
                                message: "Aula do aluno remontada com sucesso.",
                                data: {
                                    tx_parte1: partes.parte1,
                                    tx_parte2: partes.parte2,
                                    tx_parte3: partes.parte3,
                                }
                            };
                        }
                        else {
                            throw new Error((_c = res === null || res === void 0 ? void 0 : res.message) !== null && _c !== void 0 ? _c : 'Erro ao tentar buscar dados do Avalidor.');
                        }
                    }
                    else {
                        throw new Error('Erro ao tentar buscar questões da aula do aluno.');
                    }
                }
                else {
                    //Buscar dados do aluno
                    const response = yield AlunoModel_1.default.get(id_aluno);
                    if ((response === null || response === void 0 ? void 0 : response.success) && (response === null || response === void 0 ? void 0 : response.data)) {
                        const sql_search = `
                    SELECT nu_acertos_texto, nu_erros_texto, nu_acertos_imagem, nu_erros_imagem, nu_acertos_video, nu_erros_video
                    FROM tb_aluno
                    WHERE id = ?
                    `;
                        const ret = yield __1.db.all(sql_search, [id_aluno]);
                        const aluno = ret[0];
                        /** CHAMADA DO AGENTE TUTOR **/
                        const alunoData = {
                            nu_acertos_texto: aluno === null || aluno === void 0 ? void 0 : aluno.nu_acertos_texto,
                            nu_erros_texto: aluno === null || aluno === void 0 ? void 0 : aluno.nu_erros_texto,
                            nu_acertos_imagem: aluno === null || aluno === void 0 ? void 0 : aluno.nu_acertos_imagem,
                            nu_erros_imagem: aluno === null || aluno === void 0 ? void 0 : aluno.nu_erros_imagem,
                            nu_acertos_video: aluno === null || aluno === void 0 ? void 0 : aluno.nu_acertos_video,
                            nu_erros_video: aluno === null || aluno === void 0 ? void 0 : aluno.nu_erros_video
                        };
                        const res = yield AgentModel_1.default.Tutor(alunoData);
                        if ((res === null || res === void 0 ? void 0 : res.success) && (res === null || res === void 0 ? void 0 : res.data)) {
                            const partes = (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.partes;
                            return {
                                success: true,
                                message: 'Aula do aluno montada com sucesso',
                                data: {
                                    tx_parte1: partes.parte1,
                                    tx_parte2: partes.parte2,
                                    tx_parte3: partes.parte3
                                }
                            };
                        }
                        else {
                            throw new Error((_e = res === null || res === void 0 ? void 0 : res.message) !== null && _e !== void 0 ? _e : 'Erro ao tentar buscar dados do Tutor.');
                        }
                    }
                    else {
                        throw new Error('Erro ao tentar encontrar Aluno.');
                    }
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_f = error === null || error === void 0 ? void 0 : error.message) !== null && _f !== void 0 ? _f : "Erro ao tentar montar aula do aluno."
                };
            }
        });
    }
}
exports.default = AulaAluno;
