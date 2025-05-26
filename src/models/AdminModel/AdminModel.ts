import { db } from "../../..";

export default class Admin{
    private id: number;
    private tx_login: string;
    private tx_senha: string;

    constructor(id:number, tx_login:string, tx_senha:string) {
        this.id = id;
        this.tx_login = tx_login;
        this.tx_senha = tx_senha;
    }

    //Buscar o administrador pelo login e pela senha
    public static async get(tx_login:string, tx_senha:string): Promise<object> {

        try{

            const sql_search = `
            SELECT id
                FROM tb_admin 
                WHERE tx_login = ? 
                AND tx_senha = ?
                LIMIT 1;
            `;

            const response = await db.all(sql_search, [tx_login, tx_senha]);

            if(response[0]?.id && response[0]?.id > 0){
                return {
                    success: true,
                    message: "Administrador encontrado",
                    data: {
                        id: response[0].id,
                    }
                }
            }else{
                throw new Error('E-mail ou senha incorretos.')
            }

        }catch(error:any){
            console.error(error);
            return {
                success: false,
                message:  error?.message??'Error ao tentar logar.'
            }
        }
    }
}