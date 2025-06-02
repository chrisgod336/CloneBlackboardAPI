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
const api_1 = __importDefault(require("../../services/api"));
class Agents {
    //Agente Tutor
    static Tutor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                //Chamada da api
                const response = yield api_1.default.post('/tutor', data);
                const ret = response === null || response === void 0 ? void 0 : response.data;
                return {
                    success: true,
                    message: 'Dados do Tutor retornados com sucesso',
                    data: ret
                };
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao realizar a requisição do agente Tutor.',
                };
            }
        });
    }
    //Agente Avaliardor
    static Avaliador(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                //Chama a api
                const response = yield api_1.default.post('/avaliador', {
                    questoes: data.questoes
                });
                const ret = response === null || response === void 0 ? void 0 : response.data;
                return {
                    success: true,
                    message: 'Dados do Avaliador retornados com sucesso',
                    data: ret
                };
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Erro ao realizar a requisição do agente Avaliador.'
                };
            }
        });
    }
    //Agente Gestor
    static Gestor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                //Chamada da API
                const response = yield api_1.default.post('/gestor', {
                    dados: data
                });
                const ret = response === null || response === void 0 ? void 0 : response.data;
                const feedback = `
            Desempenho do aluno: ${ret.desempenho.toUpperCase()}\n
            Media geral: ${ret.media.toFixed(2)}% | Media em questões de texto: ${ret.media_por_conteudo.texto.toFixed(2)}% | Media em questões de imagem: ${ret.media_por_conteudo.imagem.toFixed(2)}% | Media em questões de vídeo: ${ret.media_por_conteudo.video.toFixed(2)}%\n
            Facilidades: ${ret.facilidades.length ?
                    ((_a = ret === null || ret === void 0 ? void 0 : ret.facilidades[0]) === null || _a === void 0 ? void 0 : _a.tipo_conteudo) +
                        ((ret === null || ret === void 0 ? void 0 : ret.facilidades[1]) ? ', ' + (ret === null || ret === void 0 ? void 0 : ret.facilidades[1].tipo_conteudo) : '') +
                        ((ret === null || ret === void 0 ? void 0 : ret.facilidades[2]) ? ', ' + (ret === null || ret === void 0 ? void 0 : ret.facilidades[2].tipo_conteudo) : '')
                    : 'NENHUMA'} | Dificuldades: ${ret.dificuldades.length ?
                    ((_b = ret === null || ret === void 0 ? void 0 : ret.dificuldades[0]) === null || _b === void 0 ? void 0 : _b.tipo_conteudo) +
                        ((ret === null || ret === void 0 ? void 0 : ret.dificuldades[1]) ? ', ' + (ret === null || ret === void 0 ? void 0 : ret.dificuldades[1].tipo_conteudo) : '') +
                        ((ret === null || ret === void 0 ? void 0 : ret.dificuldades[2]) ? ', ' + (ret === null || ret === void 0 ? void 0 : ret.dificuldades[2].tipo_conteudo) : '') + '\n'
                    : 'NENHUMA\n'}
            ${ret.ajuda ?
                    'O aluno não está indo bem e necessita de uma acompanhamento mais próximo do professor.' :
                    'O aluno está indo bem e não necessita de acompanhamento.'}
            `;
                return {
                    success: true,
                    message: 'Dados do Gestor retornados com sucesso',
                    data: Object.assign(Object.assign({}, ret), { feedback: feedback, tx_nivel: ret.desempenho })
                };
            }
            catch (error) {
                console.error(error);
                return {
                    success: false,
                    message: (_c = error === null || error === void 0 ? void 0 : error.message) !== null && _c !== void 0 ? _c : 'Erro ao realizar a requisição do agente Gestor.'
                };
            }
        });
    }
}
exports.default = Agents;
