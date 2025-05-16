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
    public static get(tx_login:string, tx_senha:string): object {
        return {

        }
    }
}