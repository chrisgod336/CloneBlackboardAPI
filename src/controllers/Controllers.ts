import { Request, Response, NextFunction } from "express"

import Admin from "../models/AdminModel/AdminModel"
import Aula from "../models/AulaModel/AulaModel";
import AulaParte from "../models/AulaParteModel/AulaParteModel";
import AulaQuestao from "../models/AulaQuestaoModel/AulaQuestaoModel";
import AulaAluno from "../models/AulaAlunoModel/AulaAlunoModel";
import Aluno from "../models/AlunoModel/AlunoModel";
import AulaAlunoQuestao from "../models/AulaAlunoQuestaoModel/AulaAlunoQuestao";
export class AdminController {
    public static async get(req:Request, res:Response) {
        const { tx_login, tx_senha } = req.query as { tx_login: string, tx_senha: string };
        const response = await Admin.get(tx_login, tx_senha);
        return res.status(200).json(response);
    }
}

export class AulaContorller {
    public static async getAll(req:Request, res:Response){
        const response = await Aula.getAll();
        return res.status(200).json(response);
    }

    public static async post(req:Request, res:Response) {
        const { tx_descricao } = req.body as { tx_descricao: string };
        const response = await Aula.post(tx_descricao);
        return res.status(200).json(response);
    }

    public static async put(req:Request, res:Response) {
        const { id, tx_descricao } = req.body as { id: number, tx_descricao: string };
        const response = await Aula.put(id, tx_descricao);
        return res.status(200).json(response); 
    }

    public static async delete(req:Request, res:Response) {
        const { id } = req.query as { id:string }
        const response = await Aula.delete(Number(id));
        return res.status(200).json(response);
    }
}

export class AulaParteController {
    public static async getAll(req:Request, res:Response) {
        const { id_aula } = req.query as {id_aula: string};
        const response = await AulaParte.getAll(Number(id_aula));
        return res.status(200).json(response);
    }

    public static async post(req:Request, res:Response) {
        const { id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video} = req.body as { id: number, id_aula: number, tx_descricao: string, tx_texto: string, 
            tx_dir_imagem: string, tx_url_video: string };
        const response = await AulaParte.post(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video);
        return res.status(200).json(response);
    }

    public static async put(req:Request, res:Response) {
        const { id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video } = req.body as { id: number, id_aula: number, tx_descricao: string, tx_texto: string,
            tx_dir_imagem: string, tx_url_video: string };
        const response = await AulaParte.put(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video);
        return res.status(200).json(response);
    }
}

export class AulaQuestaoController {
    public static async getAll(req:Request, res:Response) {
        const { id_aula } = req.query as { id_aula: string };
        const response = await AulaQuestao.getAll(Number(id_aula));
        return res.status(200).json(response);
    }

    public static async post(req:Request, res:Response) {
        const { id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta } = req.body as { id_aula: number, id_parte: number, tx_descricao:string, tx_alternativas:string, id_resposta:number, };
        const response = await AulaQuestao.post(id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta);
        return res.status(200).json(response);
    }

    public static async put(req:Request, res:Response) {
        const { id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta} = req.body as { id: number, id_aula: number, id_parte: number, tx_descricao: string, tx_alternativas: string, 
            id_resposta: number};
        const response = await AulaQuestao.put(id, id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta);
        return res.status(200).json(response);
    }

    public static async delete(req:Request, res:Response) {
        const { id, id_aula } = req.query as { id: string, id_aula:string };
        const response = await AulaQuestao.delete(Number(id), Number(id_aula));
        return res.status(200).json(response);
    }

    public static async deleteAll(req:Request, res:Response) {
        const { id_aula } = req.query as { id_aula: string };
        const response = await AulaQuestao.deleteAll(Number(id_aula));
        return res.status(200).json(response);
    }
}

export class AulaAlunoController {
    public static async get(req:Request, res:Response){
        const { id_aluno, id_aula } = req.query as { id_aluno: string, id_aula:string };
        const response = await AulaAluno.get(Number(id_aluno), Number(id_aula));
        return res.status(200).json(response);
    }

    public static async post(req:Request, res:Response) {
        const { id_aluno, id_aula } = req.body as { id_aluno: number, id_aula: number, lo_finalizado:string, nu_acertos:number, nu_erros:number };
        const response = await AulaAluno.post(id_aluno, id_aula);
        return res.status(200).json(response);
     }

     public static async put(req:Request, res:Response) {
        const { id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros } = req.body as { id_aluno: number, id_aula: number, lo_finalizado:string, nu_acertos:number, nu_erros:number };
        const response = await AulaAluno.put(id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros);
        return res.status(200).json(response);
     }
}

export class AlunoController {
    public static async getAll(req:Request, res:Response) {
        const response = await Aluno.getAll();
        return res.status(200).json(response);
    }

    public static async get(req:Request, res:Response) {
        const { id } = req.query as { id: string };
        const response = await Aluno.get(Number(id));
        return res.status(200).json(response);
    }

    public static async post(req:Request, res:Response) {
        const { tx_login, tx_nome } = req.body as { tx_login: string, tx_nome: string };
        const response = await Aluno.post(tx_login, tx_nome);
        return res.status(200).json(response);
    }

    public static async put(req:Request, res:Response) {
        const { id, tx_login, tx_nome, tx_nivel, nu_acertos_texto,nu_erros_texto, nu_acertos_imagem,nu_erros_imagem, nu_acertos_video,nu_erros_video } = req.body as { id: number, tx_login: string, tx_nome: string, 
            tx_nivel: string, nu_acertos_texto:number,nu_erros_texto:number, nu_acertos_imagem:number, nu_erros_imagem:number, nu_acertos_video:number,nu_erros_video:number };
        const response = await Aluno.put(id, tx_login, tx_nome, tx_nivel, nu_acertos_texto, nu_erros_texto, nu_acertos_imagem,nu_erros_imagem, nu_acertos_video, nu_erros_video);
        return res.status(200).json(response);
    }

    public static async delete(req:Request, res:Response) {
        const { id } = req.query as { id: string };
        const response = await Aluno.delete(Number(id));
        return res.status(200).json(response);
    }

    public static async recalculate(req:Request, res:Response){
        const response = await Aluno.recalculate();
        return res.status(200).json(response);
    }
}

export class AulaAlunoQuestaoController {
    public static async getAll(req:Request, res:Response) {
        const { id_aula, id_aluno } = req.query as { id_aula: string, id_aluno: string };
        const response = await AulaAlunoQuestao.getAll(Number(id_aula), Number(id_aluno));
        return res.status(200).json(response);
    }

    public static async post(req:Request, res:Response){
        const { id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto } = req.body as { id_aula: number, id_aluno:number, id_questao:number, id_resposta_aluno:number, tx_tipo:string,  lo_acerto:string};
        const response = await AulaAlunoQuestao.post(id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto);
        return res.status(200).json(response);
    }

    public static async put(req:Request, res:Response){
        const { id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto } = req.body as { id_aula: number, id_aluno:number, id_questao:number, id_resposta_aluno:number, tx_tipo:string, lo_acerto:string};
        const response = await AulaAlunoQuestao.put(id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto);
        return res.status(200).json(response);
    }
}
