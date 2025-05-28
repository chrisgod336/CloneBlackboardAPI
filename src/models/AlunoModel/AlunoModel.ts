import { db } from "../../..";

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

    //login do aluno
    public static async login(tx_login:string, tx_senha:string):Promise<object> {
        try{

            const sql_search = `SELECT id FROM tb_aluno WHERE tx_login = ? AND tx_senha = ? LIMIT 1`;

            const response = await db.all(sql_search, [tx_login, tx_senha]);

            if(response.length > 0 &&response[0]?.id && response[0]?.id > 0){
                const id = response[0]?.id;
                const obj:any = await this.get(id);

                if(obj?.success){
                    return obj;
                }else{
                    return {success:false, message:obj?.message??"Erro ao buscar aluno"};
                }
            }else{
                return {success: false, mensagem: "Login ou senha inválidos"};
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar logar com aluno."
            }
        }
    }

    //buscar dados do aluno
    public static async get(id:number): Promise<object> {
        try{

            const sql_search = `SELECT * FROM tb_aluno WHERE id = ?`;

            const response = await db.all(sql_search, [id]);

            //##AGENTE GESTOR##//
            const feedback =  'O aluno está tendo um bom desempenho de aprendizando com textos e imagens, porém vem apresentando défities de aprendizados com vídeos. Mesmo assim o aluno está acima da média e apresenta um bom desempenho geral.';

            if(response && response.length){
                return {
                    success: true,
                    message: 'Aluno encontrado com sucesso.',
                    data: {...response[0], feedback: feedback}
                }
            }else{
                throw new Error('Erro ao tentar buscar dados do aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??"Erro ao tentar buscar dados do aluno."
            }
        }
    }

    //buscar dados dos alunos
    public static async getAll(): Promise<object> {
        try{

            const sql_search = "SELECT * FROM tb_aluno ORDER BY id";

            const response = await db.all(sql_search);

            if(response){
                return {
                    success: true,
                    message: 'Alunos encontrados com sucesso.',
                    data: response
                }
            }else{
                throw new Error('Erro ao tentar buscar alunos.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar buscar alunos.',
            }
        }
    }

    //criar aluno
    public static async post(tx_nome:string, tx_login:string): Promise<object>{
        try{

            const sql_insert = `INSERT INTO tb_aluno (tx_nome, tx_login) VALUES (?,?)`;

            const response = await db.run(sql_insert, [tx_nome, tx_login]);

            if(response?.lastID){
                return {
                    success: true,
                    message: 'Aluno criado com sucesso.',
                    data: {id: response.lastID}
                }
            }else{
                throw new Error('Erro ao tentar criar aluno.');
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar criar aluno.',
            }
        }
    }

    //atualizar aluno
    public static async put(
        id: number,
        updateData: {
            tx_nome?: string;
            tx_login?: string;
            tx_nivel?: string;
            nu_acertos_texto?: number;
            nu_erros_texto?: number;
            nu_acertos_imagem?: number;
            nu_erros_imagem?: number;
            nu_acertos_video?: number;
            nu_erros_video?: number;
        }
    ): Promise<object> {
        try {

            const fieldsToUpdate: string[] = [];
            const values: any[] = [];

            Object.entries(updateData).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    fieldsToUpdate.push(`${key} = ?`);
                    values.push(value);
                }
            });

            if (fieldsToUpdate.length === 0) {
                return {
                    success: false,
                    message: 'Nenhum campo fornecido para atualização.'
                };
            }

            const sql_update = `
                UPDATE tb_aluno 
                SET ${fieldsToUpdate.join(', ')}
                WHERE id = ?`;

            values.push(id);

            const response = await db.run(sql_update, values);

            if (response) {
                return {
                    success: true,
                    message: 'Aluno atualizado com sucesso.',
                };
            } else {
                throw new Error('Erro ao tentar editar aluno.');
            }

        } catch (error: any) {
            console.error(error);
            return {
                success: false,
                message: error?.message ?? 'Erro ao tentar editar aluno.'
            };
        }
    }

    //deletar aluno
    public static async delete(id:number): Promise<object>{
        try{

            const queries = [
                `DELETE FROM tb_aula_aluno_questao WHERE id_aluno = ?`,
                `DELETE FROM tb_aula_aluno WHERE id_aluno = ?`,
                `DELETE FROM tb_aluno WHERE id = ?`
            ];

            for (const query of queries) {
                await db.run(query, [id]);
            }

            return {
                success: true,
                message: 'Aluno deletado com sucesso.',
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar deletar aluno.',
            }
        }
    }

    //recalcular questoes de todos alunos
    public static async recalculate(): Promise<object> {
        try{

            const sql_search = `SELECT id FROM tb_aluno`;

            const response = await db.all(sql_search);

            if(response){
                for (const aluno of response) {
                    const id = aluno?.id;
                    if(id){
                        const sql_count = `
                        SELECT 
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'S' AND tx_tipo = 'texto') AS nu_acertos_texto,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'N' AND tx_tipo = 'texto') AS nu_erros_texto,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'S' AND tx_tipo = 'imagem') AS nu_acertos_imagem,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'N' AND tx_tipo = 'imagem') AS nu_erros_imagem,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'S' AND tx_tipo = 'video') AS nu_acertos_video,
                            (SELECT COUNT(*) FROM  tb_aula_aluno_questao WHERE id_aluno = ? AND lo_acerto = 'N' AND tx_tipo = 'video') AS nu_erros_video
                        `;

                        const response_count = await db.all(sql_count, [id, id, id, id, id, id]);

                        if(response_count && response_count.length){
                            const nu_acertos_texto = response_count[0]?.nu_acertos_texto??0
                            const nu_erros_texto = response_count[0]?.nu_erros_texto??0
                            const nu_acertos_imagem = response_count[0]?.nu_acertos_imagem??0
                            const nu_erros_imagem = response_count[0]?.nu_erros_imagem??0
                            const nu_acertos_video = response_count[0]?.nu_acertos_video??0
                            const nu_erros_video = response_count[0]?.nu_erros_video??0

                            const sql_update = `
                            UPDATE tb_aluno 
                            SET nu_acertos_texto = ?, nu_erros_texto = ?, nu_acertos_imagem = ?, nu_erros_imagem = ?, nu_acertos_video = ?, nu_erros_video = ?
                            `;

                            const response_update = await db.run(sql_update, [nu_acertos_texto, nu_erros_texto, nu_acertos_imagem, nu_erros_imagem, nu_acertos_video, nu_erros_video]);
                        }
                    }
                }
            }

            return {
                success: true,
                message: 'Questões dos alunos recalculadas com sucesso.'
            };
        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message: error?.message??'Erro ao tentar recalcular questões dos alunos.',
            }
        }
    }
}