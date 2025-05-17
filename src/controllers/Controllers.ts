import { Request, Response, NextFunction } from "express"

import Admin from "../models/AdminModel/AdminModel"
import Aula from "../models/AulaModel/AulaModel";

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