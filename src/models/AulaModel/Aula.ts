export default class Aula {
    private id:number;
    private tx_descricao: string;

    constructor(id:number, tx_descricao: string) {
        this.id = id;
        this.tx_descricao = tx_descricao;
    }

    //buscar todas as aulas
    public static getAll(): object{
        return {

        }
    }

    //criar uma aula
    public static post(id:number, tx_descricao: string): object{
        return {

        }
    }

    //editar uma aula
    public static put(id:number, tx_descricao: string): object{
        return {

        }
    }

    //deletar uma aula
    public static delete(id:number): object{
        //Deletar todas as aula_parte
        //Deletar todas as aula_questao
        //Deletar todas as aula_aluno
        //Deletar todas as aula_aluno_questao
        //Recalcular as questoes de todos os alunos na tb_aluno
        return{

        }
    }
}