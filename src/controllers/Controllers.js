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
exports.AdminController = void 0;
const AdminModel_1 = __importDefault(require("../models/AdminModel/AdminModel"));
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
