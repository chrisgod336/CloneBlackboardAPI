import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

import router from './src/routes/Routes';

// Configuração inicial
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do SQLite
let db: Database;

async function setupDatabase(): Promise<Database> {
  const database = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  await database.exec('PRAGMA journal_mode = WAL;');

  return database;
}

// Função para criar as tabelas
async function createTables(database: Database): Promise<void> {
  try {
    const sqlPath = path.join(__dirname, 'db_init.sql');
    
    if (!fs.existsSync(sqlPath)) {
      throw new Error(`Arquivo SQL não encontrado em: ${sqlPath}`);
    }

    const sql = fs.readFileSync(sqlPath, 'utf-8');
    await database.exec(sql);
    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro no processo de criação de tabelas:', error);
    throw error;
  }
}

// Middleware para injetar o banco de dados nas rotas
declare module 'express' {
  interface Request {
    db: Database;
  }
}

// Rotas
app.use(express.json()) 
app.use(cors());
app.use("/", router);

// Inicialização do servidor
async function startServer() {
  try {
    db = await setupDatabase();
    await createTables(db);
    
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();

export { app, db };