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
class AulaParte {
    constructor(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video) {
        this.id = id;
        this.id_aula = id_aula;
        this.tx_descricao = tx_descricao;
        this.tx_texto = tx_texto;
        this.tx_dir_imagem = tx_dir_imagem;
        this.tx_url_video = tx_url_video;
    }
    //buscas partes da aula
    static getAll(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //criar parte da aula
    static post(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //atualizar parte da aula
    static put(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //deletar partes da aula
    static deleteAll(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
}
exports.default = AulaParte;
