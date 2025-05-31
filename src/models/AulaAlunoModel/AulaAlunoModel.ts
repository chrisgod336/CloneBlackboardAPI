import { db } from "../../..";

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
    public static async make(id_aluno:number): Promise<object>{
        try{

            //Verifica se a aula ja existe, se já manda para o Avalidar, se não para o tutor

            /** CHAMADA DO AGENTE TUTOR **/
            const aula = {
                tx_parte1: 'texto',
                tx_parte2: 'imagem',
                tx_parte3: 'video',
            }

            return {
                success: true,
                message: 'Aula do aluno montada com sucesso',
                data: aula
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