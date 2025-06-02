"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: 'http://127.0.0.1:5000/', // Use IPV4 para evitar problemas
    timeout: 10000, // 10 segundos de timeout
    headers: {
        'Content-Type': 'application/json',
    },
});
// Interceptador para logs de depuração
api.interceptors.request.use(config => {
    console.log('Enviando requisição:', config);
    return config;
});
api.interceptors.response.use(response => {
    console.log('Resposta recebida:', response);
    return response;
}, error => {
    console.error('Erro na resposta:', error);
    return Promise.reject(error);
});
exports.default = api;
