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
        return {

        }
    }

    //criar parte da aula
    public static async post(id:number, id_aula: number, tx_descricao:string, tx_texto:string, tx_dir_imagem:string, tx_url_video:string): Promise<object>{
        return {

        }
    }

    //atualizar parte da aula
    public static async put(id:number, id_aula: number, tx_descricao:string, tx_texto:string, tx_dir_imagem:string, tx_url_video:string): Promise<object>{
        return {

        }
    }

    //deletar partes da aula
    public static async deleteAll(id_aula: number): Promise<object>{
        return {

        }
    }
}