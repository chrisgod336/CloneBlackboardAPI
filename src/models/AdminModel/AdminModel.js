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
class Admin {
    constructor(id, tx_login, tx_senha) {
        this.id = id;
        this.tx_login = tx_login;
        this.tx_senha = tx_senha;
    }
    //Buscar o administrador pelo login e pela senha
    static get(tx_login, tx_senha) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const sql_search = `
            SELECT COUNT(*) AS count
                FROM tb_admin 
                WHERE tx_login = ? 
                AND tx_senha = ?;
            `;
                const response = yield __1.db.all(sql_search, [tx_login, tx_senha]);
                if (((_a = response[0]) === null || _a === void 0 ? void 0 : _a.count) && ((_b = response[0]) === null || _b === void 0 ? void 0 : _b.count) > 0) {
                    return {
                        success: true,
                        message: "Administrador encontrado",
                        data: {
                            tx_login: tx_login
                        }
                    };
                }
                else {
                    throw new Error('E-mail ou senha incorretos.');
                }
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_c = error === null || error === void 0 ? void 0 : error.message) !== null && _c !== void 0 ? _c : 'Error ao tentar logar.'
                };
            }
        });
    }
}
exports.default = Admin;
