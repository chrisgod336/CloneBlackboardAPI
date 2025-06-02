import { db } from "../../..";

export default class AulaQuestao {
    private id:number;
    private id_aula:number;
    private id_parte:number;
    private tx_descricao:string;
    private tx_alternativas:string;
    private id_resposta:number;

    constructor(id:number, id_aula:number, id_parte:number, tx_descricao:string, tx_alternativas:string, id_resposta:number){
        this.id = id;
        this.id_aula = id_aula;
        this.id_parte = id_parte;
        this.tx_descricao = tx_descricao;;
        this.tx_alternativas = tx_alternativas;
        this.id_resposta = id_resposta;
    }

    public getIdResposta():number {
        return this.id_resposta;
    }

    //buscas questoes da aula
    public static async getAll(id_aula:number): Promise<object> {
        try{

            const sql_search = `
            SELECT * FROM tb_aula_questao WHERE id_aula = ? ORDER BY id_parte, id;
            `;

            const response = await db.all(sql_search, [id_aula]);
            
            if(response){
                return {
                    success: true,
                    message: 'Questões da aula encontradas com sucesso.',
                    data: response
                }
            }else{
                throw new Error('Erro ao tentar buscar questões da aula.')
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar buscar questões da aula."
            }
        }
    }

    //criar questao da aula
    public static async post(id_aula:number, id_parte:number, tx_descricao:string, tx_alternativas:string, id_resposta:number): Promise<object> {
        try{

            const sql_inset = `
            INSERT INTO tb_aula_questao (id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta)
            VALUES (?, ?, ?, ?, ?);
            `;

            const response = await db.run(sql_inset, [id_aula, id_parte, tx_descricao, tx_alternativas, id_resposta]);

            if(response?.lastID){
                return {
                    success: true,
                    message: 'Questão da aula criada com sucesso.',
                    data: {
                        id: response.lastID
                    }
                }
            }else{
                throw new Error('Erro ao tentar criar questão da aula.')
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar criar questão da aula."
            }
        }
    }

    //atualizar questao da aula
    public static async put(id:number, id_aula:number, id_parte:number, tx_descricao:string, tx_alternativas:string, id_resposta:number): Promise<object> {
        try{

            const sql_update = `
            UPDATE tb_aula_questao 
            SET id_parte = ?, tx_descricao = ?, tx_alternativas = ?, id_resposta = ?
            WHERE id_aula = ? AND id = ?
            `;

            const response = await db.run(sql_update, [id_parte, tx_descricao, tx_alternativas, id_resposta, id_aula, id]);

            if(response){
                return {
                    success: true,
                    message: 'Questão da aula atualizada com sucesso.'
                }
            }else{
                throw new Error('Erro ao tentar atualizar questão da aula.')
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar editar questão da aula."
            }
        }
    }

    //deletar questao da aula
    public static async delete(id:number, id_aula:number): Promise<object> {
        try{    

            const sql_delete = `
            DELETE FROM tb_aula_questao
            WHERE id=? AND id_aula = ?
            `;

            const response = await db.run(sql_delete, [id, id_aula]);

            if(response){
                return {
                    success: true,
                    message: 'Questão da aula deletada com sucesso.'
                }
            }else{
                throw new Error('Erro ao tentar deletar questão da aula.')
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar deletar questão da aula."
            }
        }
    }

    //deletar questoes da aula
    public static async deleteAll(id_aula:number): Promise<object> {
        try{    

            const sql_delete = `
            DELETE FROM tb_aula_questao
            WHERE id_aula = ?
            `;

            const response = await db.run(sql_delete, [id_aula]);

            if(response){
                return {
                    success: true,
                    message: 'Questões da aula deletadas com sucesso.'
                }
            }else{
                throw new Error('Erro ao tentar deletar questões da aula.')
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar deletar questões da aula."
            }
        }
    }
}