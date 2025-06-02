import { db } from "../../..";
import Agents from "../Agents/AgentModel";
import Aluno from "../AlunoModel/AlunoModel";
import AulaAlunoQuestao from "../AulaAlunoQuestaoModel/AulaAlunoQuestao";
import AulaQuestao from "../AulaQuestaoModel/AulaQuestaoModel";
export default class AulaAluno {
    private id_aluno:number;
    private id_aula:number;
    private lo_finalizado:string;
    private nu_acertos:number;
    private nu_erros:number;
    private tx_parte1:string;
    private tx_parte2:string;
    private tx_parte3:string;

    constructor(id_aluno:number, id_aula:number, lo_finalizado:string, nu_acertos:number, nu_erros:number, tx_parte1:string, tx_parte2:string, tx_parte3:string) {
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.lo_finalizado = lo_finalizado;
        this.nu_acertos = nu_acertos;
        this.nu_erros = nu_erros;
        this.tx_parte1 = tx_parte1;
        this.tx_parte2 = tx_parte2;
        this.tx_parte3 = tx_parte3;
    }

    //buscar aula aluno
    public static async get(id_aluno:number, id_aula:number): Promise<object>{
        try{

            const sql_search = `
            SELECT * FROM tb_aula_aluno WHERE id_aluno = ? AND id_aula = ?;
            `;

            const response = await db.all(sql_search, [id_aluno, id_aula]);

            if(response && response.length){
                return {
                    success: true,
                    message: 'Aula do aluno encontrada com sucesso.',
                    data: response[0]
                }
            }else{
                throw new Error("Aula do aluno não encontrada.");
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao buscar aula do aluno."
            }
        }
    }

    //criar aula aluno
    public static async post(id_aluno:number, id_aula:number, lo_finalizado:string, nu_acertos:number, nu_erros:number, tx_parte1:string, tx_parte2:string, tx_parte3:string): Promise<object>{
        try{

            const sql_insert = `
            INSERT INTO tb_aula_aluno (id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
            `;

            const response = await db.run(sql_insert, [id_aluno, id_aula, lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3]);

            if(response){
                return {
                    success: true,
                    message: 'Aula do aluno criada com sucesso'
                }
            }else{
                throw new Error("Erro ao tentar criar aula do aluno.");
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar criar aula do aluno."
            }
        }
    }

    //atualizar aula aluno
    public static async put(id_aluno:number, id_aula:number, lo_finalizado:string, nu_acertos:number, nu_erros:number, tx_parte1:string, tx_parte2:string, tx_parte3:string): Promise<object>{
        try {

            const sql_update = `
            UPDATE tb_aula_aluno
                SET lo_finalizado = ?, nu_acertos = ?, nu_erros = ?, tx_parte1 = ?, tx_parte2 = ?, tx_parte3 = ?
                WHERE id_aluno = ? AND id_aula = ?;
            `;

            const response = await db.run(sql_update, [lo_finalizado, nu_acertos, nu_erros, tx_parte1, tx_parte2, tx_parte3, id_aluno, id_aula]);

            if(response){
                return {
                    success: true,
                    message: 'Aula do aluno editada com sucesso.'
                }
            }else{
                throw new Error('Erro ao tentar editar aula do aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar editar aula do aluno."
            }
        }
    }

    //Monta aula para o aluno
    public static async make(
        id_aluno:number,
        id_aula?:number
    ): Promise<object>{
        try{
            //Verifica se a aula ja existe, se já manda para o Avalidar, se não para o tutor
            if(id_aula){

                //Buscar dados das questões da aula
                const sql_search1 = `
                SELECT id_resposta_aluno, tx_tipo
                    FROM tb_aula_aluno_questao
                    WHERE id_aula = ? AND id_aluno = ?
                    ORDER BY id_questao
                    LIMIT 15;
                `;

                const response1 = await db.all(sql_search1, [id_aula, id_aluno]);

                const sql_search2 = `
                SELECT id_resposta
                    FROM tb_aula_questao
                    WHERE id_aula = ?
                    ORDER BY id
                    LIMIT 15;
                `;

                const response2 = await db.all(sql_search2, [id_aula]);
                
                if(response1 && response1?.length == 15 && response2 && response2?.length == 15){

                    const questoes:any = response1?.map((item: any, index:number) => {

                            const questaoAula = response2[index];

                            return {
                                resposta_correta: questaoAula?.id_resposta.toString(),
                                resposta_aluno: item?.id_resposta_aluno.toString(),
                                tipo: item?.tx_tipo
                            }
                        });

                    /** CHAMADA DO AGENTE AVALIDOR **/

                    const res = await Agents.Avaliador({questoes: questoes});
                   
                    const partes = res?.data?.partes?.partes;

                    if(res?.success && res?.data){
                        return {
                            success: true,
                            message: "Aula do aluno remontada com sucesso.",
                            data: {
                                tx_parte1: partes.parte1,
                                tx_parte2: partes.parte2,
                                tx_parte3: partes.parte3,
                            }
                        }
                    }else{
                        throw new Error(res?.message??'Erro ao tentar buscar dados do Avalidor.');
                    }

                }else{
                    throw new Error('Erro ao tentar buscar questões da aula do aluno.');
                }
                

            }else{

                //Buscar dados do aluno
                const response:any = await Aluno.get(id_aluno);

                if(response?.success && response?.data){

                    const sql_search = `
                    SELECT nu_acertos_texto, nu_erros_texto, nu_acertos_imagem, nu_erros_imagem, nu_acertos_video, nu_erros_video
                    FROM tb_aluno
                    WHERE id = ?
                    `;

                    const ret = await db.all(sql_search, [id_aluno]);
                    const aluno = ret[0];  

                    /** CHAMADA DO AGENTE TUTOR **/
                    const alunoData = {
                        nu_acertos_texto: aluno?.nu_acertos_texto,
                        nu_erros_texto: aluno?.nu_erros_texto,
                        nu_acertos_imagem: aluno?.nu_acertos_imagem,
                        nu_erros_imagem: aluno?.nu_erros_imagem,
                        nu_acertos_video: aluno?.nu_acertos_video,
                        nu_erros_video: aluno?.nu_erros_video
                    }

                    const res = await Agents.Tutor(alunoData);

                    if(res?.success && res?.data){
                        const partes = res?.data?.partes;
                        return {
                            success: true,
                            message: 'Aula do aluno montada com sucesso',
                            data: {
                                tx_parte1: partes.parte1,
                                tx_parte2: partes.parte2,
                                tx_parte3: partes.parte3
                            }
                        }
                    }else{
                        throw new Error(res?.message??'Erro ao tentar buscar dados do Tutor.');
                    }

                }else{
                    throw new Error('Erro ao tentar encontrar Aluno.');
                }  
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar montar aula do aluno."
            }
        }
    }
}