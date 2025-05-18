import { db } from "../../..";

export default class AulaParte {
    private id:number;
    private id_aula:number;
    private tx_descricao:string;
    private tx_texto:string;
    private tx_dir_imagem:string;
    private tx_url_video:string;

    constructor(id:number, id_aula:number, tx_descricao:string, tx_texto:string, tx_dir_imagem:string, tx_url_video:string){
        this.id = id;
        this.id_aula = id_aula;
        this.tx_descricao = tx_descricao;
        this.tx_texto = tx_texto;
        this.tx_dir_imagem = tx_dir_imagem;
        this.tx_url_video = tx_url_video;
    }

    //buscas partes da aula
    public static async getAll(id_aula: number): Promise<object>{
        try{

            const sql_search = `
            SELECT * FROM tb_aula_parte
                WHERE id_aula = ?
                ORDER BY id
            `;

            const response = await db.all(sql_search, [id_aula]);

            if(response && response.length){
                return {
                    status: true,
                    message: 'Partes da aula encontradas com sucesso.',
                    data: response
                }
            }else{
                return {
                    status: false,
                    message: 'Nenhuma parte da aula encontrada.',
                }
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar buscar as partes da aula'
            }
        }
    }

    //criar parte da aula
    public static async post(id:number, id_aula: number, tx_descricao:string, tx_texto:string, tx_dir_imagem:string, tx_url_video:string): Promise<object>{
        try{

            const sql_insert = `
            INSERT INTO tb_aula_parte(id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video)
                VALUES (?, ?, ?, ?, ?, ?);
            `;

            const response = await db.run(sql_insert, [id, id_aula, tx_descricao, tx_texto, tx_dir_imagem, tx_url_video]);

            if(response){
                return {
                    success: true,
                    message: 'Parte da aula criada com sucesso.'
                }
            }else{
                throw new Error('Erro ao tentar criar parte da aula.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar criar parte da aula.',
            }
        }
    }

    //atualizar parte da aula
    public static async put(id:number, id_aula: number, tx_descricao:string, tx_texto:string, tx_dir_imagem:string, tx_url_video:string): Promise<object>{
        try{

            const sql_update = `
            UPDATE tb_aula_parte
                SET tx_descricao = ?,
                tx_texto = ?,
                tx_dir_imagem = ?,
                tx_url_video = ?
                WHERE id = ? AND id_aula = ?;
            `;

            const response = await db.run(sql_update, [tx_descricao, tx_texto, tx_dir_imagem, tx_url_video, id, id_aula]);

            if(response){
                return {
                    success: true,
                    message: 'Parte da aula atualizada com sucesso.'
                }
            }else{
                return {
                    success: false,
                    message: 'Erro ao tentar editar parte da aula.'
                }
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Error ao tentar editar a parte da aula',
            }
        }
    }
}