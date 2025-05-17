export default class Aula {
    private id:number;
    private tx_descricao: string;

    constructor(id:number, tx_descricao: string) {
        this.id = id;
        this.tx_descricao = tx_descricao;
    }

    //buscar todas as aulas
    public static async getAll(): Promise<object>{
        return {

        }
    }

    //criar uma aula
    public static async post(tx_descricao: string): Promise<object>{
        return {

        }
    }

    //editar uma aula
    public static async put(id:number, tx_descricao: string): Promise<object>{
        return {

        }
    }

    //deletar uma aula
    public static async delete(id:number): Promise<object>{
        //Deletar todas as aula_parte
        //Deletar todas as aula_questao
        //Deletar todas as aula_aluno
        //Deletar todas as aula_aluno_questao
        //Recalcular as questoes de todos os alunos na tb_aluno
        return{

        }
    }
}