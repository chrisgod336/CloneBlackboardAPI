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
exports.AulaAlunoController = exports.AulaQuestaoController = exports.AulaParteController = exports.AulaContorller = exports.AdminController = void 0;
const AdminModel_1 = __importDefault(require("../models/AdminModel/AdminModel"));
const AulaModel_1 = __importDefault(require("../models/AulaModel/AulaModel"));
const AulaParteModel_1 = __importDefault(require("../models/AulaParteModel/AulaParteModel"));
const AulaQuestaoModel_1 = __importDefault(require("../models/AulaQuestaoModel/AulaQuestaoModel"));
const AulaAlunoModel_1 = __importDefault(require("../models/AulaAlunoModel/AulaAlunoModel"));
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
            const { id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta, tx_tipo } = req.body;
            const response = yield AulaQuestaoModel_1.default.post(id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta, tx_tipo);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta, tx_tipo } = req.body;
            const response = yield AulaQuestaoModel_1.default.put(id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta, tx_tipo);
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
            const { id_aluno, id_aula } = req.body;
            const response = yield AulaAlunoModel_1.default.post(id_aluno, id_aula);
            return res.status(200).json(response);
        });
    }
    static put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros } = req.body;
            const response = yield AulaAlunoModel_1.default.put(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros);
            return res.status(200).json(response);
        });
    }
}
exports.AulaAlunoController = AulaAlunoController;
