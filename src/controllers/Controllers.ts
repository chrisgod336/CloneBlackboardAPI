import { Request, Response, NextFunction } from "express"

import Admin from "../models/AdminModel/AdminModel"

export class AdminController {
    public static async get(req:Request, res:Response) {
        const { tx_login, tx_senha } = req.query as { tx_login: string, tx_senha: string };
        const response = await Admin.get(tx_login, tx_senha);
        return res.status(200).json(response);
    }
}