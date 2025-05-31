import { db } from "../../..";
import Aluno from "../AlunoModel/AlunoModel";

export default class Aula {
    private id:number;
    private tx_descricao: string;

    constructor(id:number, tx_descricao: string) {
        this.id = id;
        this.tx_descricao = tx_descricao;
    }

    //buscar todas as aulas
    public static async getAll(): Promise<object>{
        try {

            const sql_search = `
            SELECT * 
                FROM tb_aula
                ORDER BY id 
            `;

            const response = await db.all(sql_search);

            if(response){
                return {
                    success: true,
                    message: 'Aulas encontradas com sucesso.',
                    data: response
                }
            }else{
                throw new Error('Erro ao tentar buscar as aulas.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Error ao tentar buscar aulas.'
            }
        }
    }

    //buscar aula
    public static async get(id:number): Promise<object>{
        try {

            const sql_search = `
            SELECT * 
                FROM tb_aula
                WHERE id = ?
            `;

            const response = await db.all(sql_search, [id]);

            if(response[0]){
                return {
                    success: true,
                    message: 'Aula encontrada com sucesso.',
                    data: response[0]
                }
            }else{
                throw new Error('Erro ao tentar buscar as aula.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Error ao tentar buscar aula.'
            }
        }
    }

    //criar uma aula
    public static async post(tx_descricao: string): Promise<object>{
        try{

            const sql_insert = `
            INSERT INTO tb_aula(tx_descricao) 
                VALUES(?);
            `;

           const response = await db.run(sql_insert, [tx_descricao]);
           
           if(response?.lastID){
                return {
                    success: true,
                    message: 'Aula criada com sucesso.',
                    data: {
                        id: response.lastID
                    }
                }
           }else{
                throw new Error('Erro ao tentar criar a aula');
           }
        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar criar a aula'
            }
        }
    }

    //editar uma aula
    public static async put(id:number, tx_descricao: string): Promise<object>{
        try{

            const sql_update = `
            UPDATE tb_aula
                SET tx_descricao = ?
                WHERE id = ?
            `;

            const response = await db.run(sql_update, [tx_descricao, id]);

            if(response){
                return {
                    success: true,
                    message: 'Dados da aula editados com sucesso.'
                }
            }else{
                throw new Error('Erro ao tentar editar dados da aula.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: 'Erro ao tentar editar dados da aula.'
            }
        }
    }

    //deletar uma aula
    public static async delete(id: number): Promise<object> {
        try {

            const queries = [
                `DELETE FROM tb_aula_aluno_questao WHERE id_aula = ?`,
                `DELETE FROM tb_aula_aluno WHERE id_aula = ?`,
                `DELETE FROM tb_aula_questao WHERE id_aula = ?`,
                `DELETE FROM tb_aula_parte WHERE id_aula = ?`,
                `DELETE FROM tb_aula WHERE id = ?` 
            ];

            for (const query of queries) {
                await db.run(query, [id]);
            }

            // const res:any = await Aluno.recalculate();
            // if (res?.success) {
                return {
                    success: true,
                    message: 'Aula deletada com sucesso.'
                };
            // } else {
            //     return {
            //         success: false,
            //         message: 'Aula deletada, mas houve um erro ao recalcular as questões dos alunos.'
            //     };
            // }

        } catch (error: any) {
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao deletar aula.'
            };
        }
    }
}