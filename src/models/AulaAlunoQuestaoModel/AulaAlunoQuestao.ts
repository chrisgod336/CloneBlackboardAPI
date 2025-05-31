import { db } from "../../..";
import Aluno from "../AlunoModel/AlunoModel";
export default class AulaAlunoQuestao {
    private id_aluno:number;
    private id_aula:number;
    private id_questao:number;
    private id_resposta_aluno:number;
    private tx_tipo:string;
    private lo_acerto:string;

    constructor(id_aluno:number, id_aula:number, id_questao:number, id_resposta_aluno:number, tx_tipo:string, lo_acerto:string){
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.id_questao = id_questao;
        this.id_resposta_aluno = id_resposta_aluno;
        this.tx_tipo = tx_tipo;
        this.lo_acerto = lo_acerto;
    }

    //buscar questoes aula aluno
    public static async getAll(id_aula:number, id_aluno:number): Promise<object>{
        try{

            const sql_search = `
            SELECT * FROM tb_aula_aluno_questao WHERE id_aula = ? AND id_aluno = ?;
            `;

            const response = await db.all(sql_search, [id_aula, id_aluno]);

            if(response){
                return {
                    success: true,
                    message: 'Questões da aula do aluno encontradas com sucesso.',
                    data: response
                }
            }else{
                throw new Error('Erro ao tentar buscar questões do aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: "Erro ao tentar buscar questões do aluno."
            }
        }
    }

    //criar questao aula aluno
    public static async post(id_aula:number, id_aluno:number, id_questao:number, id_resposta_aluno:number, tx_tipo:string, lo_acerto:string): Promise<object>{
        try{

            const sql_insert = `
            INSERT INTO tb_aula_aluno_questao (id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto)
            VALUES (?, ?, ?, ?, ?, ?);
            `;

            const response = await db.run(sql_insert, [id_aula, id_aluno, id_questao, id_resposta_aluno, tx_tipo, lo_acerto]);

            if(response){

                // const res:any = await Aluno.recalculate();

                // if(res?.success){
                    return {
                        success: true,
                        message: 'Questão do aluno criada com sucesso.'
                    }
                // }else{
                //     throw new Error(res?.message??'Erro ao tentar recalular questões dos alunos.')
                // }

            }else{
                throw new Error('Erro ao  tentar criar questão do aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar criar questão do aluno."
            }
        }
    }

    //atualizar questao aula aluno
    public static async put(id_aula:number, id_aluno:number, id_questao:number, id_resposta_aluno:number, tx_tipo:string, lo_acerto:string): Promise<object>{
        try{
            const sql_update = `
            UPDATE tb_aula_aluno_questao
            SET id_resposta_aluno = ?, tx_tipo = ?, lo_acerto = ?
            WHERE id_aula = ? AND id_aluno = ? AND id_questao = ?;
            `;

            const response = await db.run(sql_update, [id_resposta_aluno, tx_tipo, lo_acerto, id_aula, id_aluno, id_questao]);

            if(response){

                // const res:any = await Aluno.recalculate();

                // if(res?.success){
                    return {
                        success: true,
                        message: 'Questão do aluno atualizada com sucesso.'
                    }
                // }else{
                //     throw new Error(res?.message??'Erro ao tentar recalular questões dos alunos.')
                // }

            }else{
                throw new Error('Erro ao tentar atualizar questão do aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar atualizar questão do aluno."
            }
        }
    }

    //deletar todas as questao aula aluno
    public static async deleteAll(id_aula:number, id_aluno:number): Promise<object>{
        try{

            const sql_delte = `
            DELETE FROM tb_aula_aluno_questao WHERE id_aula = ? AND id_aluno = ?;
            `;

            const response = await db.run(sql_delte, [id_aula, id_aluno]);

            if(response){

                // const res:any = await Aluno.recalculate();

                // if(res?.success){
                    return {
                        success: true,
                        message: 'Questões do aluno deletadas com sucesso.'
                    }
                // }else{
                //     throw new Error(res?.message??'Erro ao tentar recalular questões dos alunos.')
                // }

            }else{
                throw new Error('Erro ao  tentar deletar questões do aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar deletar questões do aluno."
            }
        }
    }
}