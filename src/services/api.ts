import axios from 'axios';

const api = axios.create({
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

export default api;