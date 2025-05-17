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
class AulaQuestaoModel {
    constructor(id, id_aula, id_parte, tx_alternativas, id_resposta, tx_tipo) {
        this.id = id;
        this.id_aula = id_aula;
        this.id_parte = id_parte;
        this.tx_alternativas = tx_alternativas;
        this.id_resposta = id_resposta;
        this.tx_tipo = tx_tipo;
    }
    //buscas questoes da aula
    static get(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //criar questao da aula
    static post(id_aula, id_parte, tx_alternativas, id_resposta, tx_tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //atualizar questao da aula
    static put(id, id_aula, id_parte, tx_alternativas, id_resposta, tx_tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //deletar questao da aula
    static delete(id, id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //deletar questoes da aula
    static deleteAll(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
}
exports.default = AulaQuestaoModel;
