export default class AulaAlunoModel {
    private id_aluno:number;
    private id_aula:number;
    private lo_finalizado:string;
    private nu_acertos:number;
    private nu_erros:number;

    constructor(id_aluno:number, id_aula:number, lo_finalizado:string, nu_acertos:number, nu_erros:number){
        this.id_aluno = id_aluno;
        this.id_aula = id_aula;
        this.lo_finalizado = lo_finalizado;
        this.nu_acertos = nu_acertos;
        this.nu_erros = nu_erros;
    }

    //buscar aula aluno
    public static async get(id_aluno:number, id_aula:number): Promise<object>{
        return{

        }
    }

    //criar aula aluno
    public static async post(id_aluno:number, id_aula:number, lo_finalizado:string, nu_acertos:number, nu_erros:number): Promise<object>{
        return{
            
        }
    }

    //atualizar aula aluno
    public static async put(id_aluno:number, id_aula:number, lo_finalizado:string, nu_acertos:number, nu_erros:number): Promise<object>{
        return{
            
        }
    }

    //deletar aulas aluno
    public static async deleteAll(id_aula?:number, id_aluno?:number): Promise<object>{
        return{
            
        }
    }
}