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
            var _a;
            try {
                const sql_search = `
            SELECT * FROM tb_aula_parte
                WHERE id_aula = ?
                ORDER BY id
            `;
                const response = yield __1.db.all(sql_search, [id_aula]);
                if (response && response.length) {
                    return {
                        status: true,
                        message: 'Partes da aula encontradas com sucesso.',
                        data: response
                    };
                }
                else {
                    return {
                        status: false,
                        message: 'Nenhuma parte da aula encontrada.',
                    };
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar buscar as partes da aula'
                };
            }
        });
    }
    //criar parte da aula
    static post(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_insert = `
            INSERT INTO tb_aula_parte(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video)
                VALUES (?, ?, ?, ?, ?, ?);
            `;
                const response = yield __1.db.run(sql_insert, [id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video]);
                if (response) {
                    return {
                        success: true,
                        message: 'Parte da aula criada com sucesso.'
                    };
                }
                else {
                    throw new Error('Erro ao tentar criar parte da aula.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao tentar criar parte da aula.',
                };
            }
        });
    }
    //atualizar parte da aula
    static put(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql_update = `
            UPDATE tb_aula_parte
                SET tx_descricao = ?,
                tx_texto = ?,
                tx_dir_imagem = ?,
                tx_url_video = ?
                WHERE id = ? AND id_aula = ?;
            `;
                const response = yield __1.db.run(sql_update, [tx_descricao, tx_texto, tx_dir_imagem, tx_url_video, id, id_aula]);
                if (response) {
                    return {
                        success: true,
                        message: 'Parte da aula atualizada com sucesso.'
                    };
                }
                else {
                    return {
                        success: false,
                        message: 'Erro ao tentar editar parte da aula.'
                    };
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Error ao tentar editar a parte da aula',
                };
            }
        });
    }
}
exports.default = AulaParte;
