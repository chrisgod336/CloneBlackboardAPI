export default class AulaQuestaoModel {
    private id:number;
    private id_aula:number;
    private id_parte:number;
    private tx_alternativas:string;
    private id_resposta:number;
    private tx_tipo:string;

    constructor(id:number, id_aula:number, id_parte:number, tx_alternativas:string, id_resposta:number, tx_tipo:string){
        this.id = id;
        this.id_aula = id_aula;
        this.id_parte = id_parte;
        this.tx_alternativas = tx_alternativas;
        this.id_resposta = id_resposta;
        this.tx_tipo = tx_tipo;
    }

    //buscas questoes da aula
    public static async get(id_aula:number): Promise<object> {
        return {

        }
    }

    //criar questao da aula
    public static async post(id_aula:number, id_parte:number, tx_alternativas:string, id_resposta:number, tx_tipo:string): Promise<object> {
        return {
            
        }
    }

    //atualizar questao da aula
    public static async put(id:number, id_aula:number, id_parte:number, tx_alternativas:string, id_resposta:number, tx_tipo:string): Promise<object> {
        return {
            
        }
    }

    //deletar questao da aula
    public static async delete(id:number, id_aula:number): Promise<object> {
        return {
            
        }
    }

    //deletar questoes da aula
    public static async deleteAll(id_aula:number): Promise<object> {
        return {
            
        }
    }
}