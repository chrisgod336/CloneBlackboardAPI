export default class Aluno {
    private id:number;
    private tx_nome:string;
    private tx_login:string;
    private tx_senha:string;
    private tx_nivel:string;
    private nu_acertos_texto:number;
    private nu_erros_texto:number;
    private nu_acertos_imagem:number;
    private nu_erros_imagem:number;
    private nu_acertos_video:number;
    private nu_erros_video:number;

    constructor(id:number, tx_nome:string, tx_login:string, tx_senha:string, tx_nivel:string, nu_acertos_texto:number, nu_erros_texto:number, nu_acertos_imagem:number,
        nu_erros_imagem:number, nu_acertos_video:number, nu_erros_video:number
    ){
        this.id = id;
        this.tx_nome = tx_nome;
        this.tx_login = tx_login;
        this.tx_senha = tx_senha;
        this.tx_nivel = tx_nivel;
        this.nu_acertos_texto = nu_acertos_texto;
        this.nu_erros_texto = nu_erros_texto;
        this.nu_acertos_imagem = nu_acertos_imagem;
        this.nu_erros_imagem = nu_erros_imagem;
        this.nu_acertos_video = nu_acertos_video;
        this.nu_erros_video = nu_erros_video;
    }

    //buscar dados do aluno
    public static async get(id:number): Promise<object> {
        return {

        }
    }

    //buscar dados dos alunos
    public static async getAll(): Promise<object> {
        return {
            
        }
    }

    //criar aluno
    public static async post(tx_nome:string, tx_login:string): Promise<object>{
        return {

        }
    }

    //atualizar aluno
    public static async put(id:number, tx_nome:string, tx_login:string, tx_nivel:string, tx_nu_acertos_texto:number,tx_nu_erros_texto:number, tx_nu_acertos_imagem:number,tx_nu_erros_imagem:number, 
        tx_nu_acertos_video:number,tx_nu_erros_video:number): Promise<object>{
        return {
            
        }
    }

    //deletar aluno
    public static async delete(id:number): Promise<object>{
        return {
            //Deletar todos os registro do aluno da tb_aula_aluno_questao
            //Deletar todos os registro do aluno da tb_aula_aluno
            //Deletar registro do aluno da tb_aluno
        }
    }

    //recalcular questoes de todos alunos
    public static async recalculate(): Promise<object> {
        return {
            success: true,
            message: 'Questões dos alunos recalculadas com sucesso.'
        };
    }
}