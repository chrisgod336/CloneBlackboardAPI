-- DROP TABLE tb_aula_aluno_questao;
-- DROP TABLE tb_aula_aluno;
-- DROP TABLE tb_aula_parte;
-- DROP TABLE tb_aula_questao;

-- Tabela de administradores
CREATE TABLE IF NOT EXISTS tb_admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tx_login VARCHAR(225) NOT NULL,
    tx_senha VARCHAR(225) DEFAULT 'senha1234' 
);

-- Tabela de aulas
CREATE TABLE IF NOT EXISTS tb_aula (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tx_descricao VARCHAR(225) NOT NULL
);

-- Tabela de partes da aula
CREATE TABLE IF NOT EXISTS tb_aula_parte (
    id INTEGER NOT NULL,
    id_aula INTEGER NOT NULL,
    tx_descricao VARCHAR(225) NOT NULL,
    tx_texto TEXT NOT NULL ,
    tx_dir_imagem TEXT NOT NULL,
    tx_url_video TEXT NOT NULL,
    FOREIGN KEY (id_aula) REFERENCES tb_aula(id)
);

-- Tabela de questões das aulas
CREATE TABLE IF NOT EXISTS tb_aula_questao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_aula INTEGER NOT NULL,
    id_parte INTEGER NOT NULL,
    tx_descricao TEXT NOT NULL,
    tx_alternativas VARCHAR(225) NOT NULL,
    id_resposta INTEGER NOT NULL,
    FOREIGN KEY (id_aula) REFERENCES tb_aula(id),
    FOREIGN KEY (id_parte) REFERENCES tb_aula_parte(id)
);

-- Tabela de alunos
CREATE TABLE IF NOT EXISTS tb_aluno (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tx_nome VARCHAR(255) NOT NULL,
    tx_login VARCHAR(255) NOT NULL,
    tx_senha VARCHAR(255) DEFAULT 'senha1234',
    tx_nivel VARCHAR(255) DEFAULT 'muito baixo',
    nu_acertos_texto INTEGER DEFAULT 0,
    nu_erros_texto INTEGER DEFAULT 0,
    nu_acertos_imagem INTEGER DEFAULT 0,
    nu_erros_imagem INTEGER DEFAULT 0,
    nu_acertos_video INTEGER DEFAULT 0,
    nu_erros_video INTEGER DEFAULT 0
);

-- Tabela de relação aluno-aula
CREATE TABLE IF NOT EXISTS tb_aula_aluno (
    id_aluno INTEGER NOT NULL,
    id_aula INTEGER NOT NULL,
    lo_finalizado CHAR(1) DEFAULT 'N',
    nu_acertos INTEGER DEFAULT 0,
    nu_erros INTEGER DEFAULT 0,
    tx_parte1 VARCHAR(255),
    tx_parte2 VARCHAR(255),
    tx_parte3 VARCHAR(255),
    FOREIGN KEY (id_aluno) REFERENCES tb_aluno(id),
    FOREIGN KEY (id_aula) REFERENCES tb_aula(id)
);

-- Tabela de respostas dos alunos às questões
CREATE TABLE IF NOT EXISTS tb_aula_aluno_questao (
    id_aluno INTEGER NOT NULL,
    id_aula INTEGER NOT NULL,
    id_questao INTEGER NOT NULL,
    id_resposta_aluno INTEGER NOT NULL,
    lo_acerto CHAR(1) DEFAULT 'N',
    tx_tipo VARCHAR(225) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES tb_aluno(id),
    FOREIGN KEY (id_aula) REFERENCES tb_aula(id),
    FOREIGN KEY (id_questao) REFERENCES tb_aula_questao(id)
);


