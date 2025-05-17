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
        return{

        }
    }

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

    //deletar questoes da aula aluno
    public static async deleteAll(id_aluno?:number, id_aula?:number): Promise<object>{
        return{
            
        }
    }
}