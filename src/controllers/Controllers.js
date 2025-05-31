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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaAlunoQuestaoController = exports.AlunoController = exports.AulaAlunoController = exports.AulaQuestaoController = exports.AulaParteController = exports.AulaContorller = exports.AdminController = void 0;
const AdminModel_1 = __importDefault(require("../models/AdminModel/AdminModel"));
const AulaModel_1 = __importDefault(require("../models/AulaModel/AulaModel"));
const AulaParteModel_1 = __importDefault(require("../models/AulaParteModel/AulaParteModel"));
const AulaQuestaoModel_1 = __importDefault(require("../models/AulaQuestaoModel/AulaQuestaoModel"));
const AulaAlunoModel_1 = __importDefault(require("../models/AulaAlunoModel/AulaAlunoModel"));
const AlunoModel_1 = __importDefault(require("../models/AlunoModel/AlunoModel"));
const AulaAlunoQuestao_1 = __importDefault(require("../models/AulaAlunoQuestaoModel/AulaAlunoQuestao"));
class AdminController {
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tx_login, tx_senha } = req.query;
            const response = yield AdminModel_1.default.get(tx_login, tx_senha);
            return res.status(200).json(response);
        });
    }
}
exports.AdminController = AdminController;
class AulaContorller {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield AulaModel_1.default.getAll();
            return res.status(200).json(response);
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            const response = yield AulaModel_1.default.get(Number(id));
            return res.status(200).json(response);
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tx_descricao } = req.body;
            const response = yield AulaModel_1.default.post(tx_descricao);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, tx_descricao } = req.body;
            const response = yield AulaModel_1.default.put(id, tx_descricao);
            return res.status(200).json(response);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            const response = yield AulaModel_1.default.delete(Number(id));
            return res.status(200).json(response);
        });
    }
}
exports.AulaContorller = AulaContorller;
class AulaParteController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula } = req.query;
            const response = yield AulaParteModel_1.default.getAll(Number(id_aula));
            return res.status(200).json(response);
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video } = req.body;
            const response = yield AulaParteModel_1.default.post(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video } = req.body;
            const response = yield AulaParteModel_1.default.put(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video);
            return res.status(200).json(response);
        });
    }
}
exports.AulaParteController = AulaParteController;
class AulaQuestaoController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula } = req.query;
            const response = yield AulaQuestaoModel_1.default.getAll(Number(id_aula));
            return res.status(200).json(response);
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta } = req.body;
            const response = yield AulaQuestaoModel_1.default.post(id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta } = req.body;
            const response = yield AulaQuestaoModel_1.default.put(id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta);
            return res.status(200).json(response);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_aula } = req.query;
            const response = yield AulaQuestaoModel_1.default.delete(Number(id), Number(id_aula));
            return res.status(200).json(response);
        });
    }
    static deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula } = req.query;
            const response = yield AulaQuestaoModel_1.default.deleteAll(Number(id_aula));
            return res.status(200).json(response);
        });
    }
}
exports.AulaQuestaoController = AulaQuestaoController;
class AulaAlunoController {
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aluno, id_aula } = req.query;
            const response = yield AulaAlunoModel_1.default.get(Number(id_aluno), Number(id_aula));
            return res.status(200).json(response);
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3 } = req.body;
            const response = yield AulaAlunoModel_1.default.post(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3 } = req.body;
            const response = yield AulaAlunoModel_1.default.put(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3);
            return res.status(200).json(response);
        });
    }
    static make(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aluno } = req.query;
            const response = yield AulaAlunoModel_1.default.make(Number(id_aluno));
            return res.status(200).json(response);
        });
    }
}
exports.AulaAlunoController = AulaAlunoController;
class AlunoController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tx_login, tx_senha } = req.query;
            const response = yield AlunoModel_1.default.login(tx_login, tx_senha);
            return res.status(200).json(response);
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield AlunoModel_1.default.getAll();
            return res.status(200).json(response);
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            const response = yield AlunoModel_1.default.get(Number(id));
            return res.status(200).json(response);
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tx_nome, tx_login } = req.body;
            const response = yield AlunoModel_1.default.post(tx_nome, tx_login);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { id } = _a, updateData = __rest(_a, ["id"]);
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: 'O ID do aluno é obrigatório.'
                    });
                }
                const filteredUpdateData = Object.fromEntries(Object.entries(updateData).filter(([_, value]) => value !== undefined && value !== null));
                if (Object.keys(filteredUpdateData).length === 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'Nenhum campo válido fornecido para atualização.'
                    });
                }
                const response = yield AlunoModel_1.default.put(id, filteredUpdateData);
                const statusCode = response.success ? 200 : 400;
                return res.status(statusCode).json(response);
            }
            catch (error) {
                console.error('Erro no controller:', error);
                return res.status(500).json({
                    success: false,
                    message: 'Erro interno no servidor ao atualizar aluno.'
                });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            const response = yield AlunoModel_1.default.delete(Number(id));
            return res.status(200).json(response);
        });
    }
}
exports.AlunoController = AlunoController;
class AulaAlunoQuestaoController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula, id_aluno } = req.query;
            const response = yield AulaAlunoQuestao_1.default.getAll(Number(id_aula), Number(id_aluno));
            return res.status(200).json(response);
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto } = req.body;
            const response = yield AulaAlunoQuestao_1.default.post(id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto } = req.body;
            const response = yield AulaAlunoQuestao_1.default.put(id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto);
            return res.status(200).json(response);
        });
    }
    static deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula, id_aluno } = req.query;
            const response = yield AulaAlunoQuestao_1.default.deleteAll(Number(id_aula), Number(id_aluno));
            return res.status(200).json(response);
        });
    }
}
exports.AulaAlunoQuestaoController = AulaAlunoQuestaoController;
