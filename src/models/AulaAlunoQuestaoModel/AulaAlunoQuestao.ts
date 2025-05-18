import { db } from "../../..";

export default class AulaAlunoQuestaoModel {
    private id_aluno:number;
    private id_aula:number;
    private id_questao:number;
    private id_resposta:number;
    private lo_acerto:string;

    constructor(id_aluno:number, id_aula:number, id_questao:number, id_resposta:number, lo_acerto:string){
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.id_questao = id_questao;
        this.id_resposta = id_resposta;
        this.lo_acerto = lo_acerto;
    }

    //buscar questoes aula aluno
    public static async get(id_aula:number, id_aluno:number): Promise<object>{
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

    /** FAZER ENTIDADE DE ALUNO PRIMEIRO **/

    //criar questao aula aluno
    public static async create(id_aula:number, id_aluno:number, id_questao:number, id_resposta:number, lo_acerto:string): Promise<object>{
        return{
            //Criar tb_aula_aluno_questao
            //Adicionar questao no historico do aluno
        }
    }

    //atualizar questao aula aluno
    public static async put(id_aula:number, id_aluno:number, id_questao:number, id_resposta:number, lo_acerto:string): Promise<object>{
        return{
            //Atualizar tb_aula_aluno_questao
            //Atualizar questao no historico do aluno
        }
    }
}