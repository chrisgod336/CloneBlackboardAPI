import api from "../../services/api";

interface ResponseProps {
    success: boolean,
    message: string,
    data?: any
}

interface TutorProps {
    nu_acertos_texto: number;
    nu_erros_texto: number;
    nu_acertos_imagem: number;
    nu_erros_imagem: number;
    nu_acertos_video: number;
    nu_erros_video: number;
}

interface TutorDataProps {
    parte1: 'texto'|'imagem'|'video',
    parte2: 'texto'|'imagem'|'video',
    parte3: 'texto'|'imagem'|'video'
}

interface AvaliadorProps {
    questoes: any[];
}

interface AvaliadorDataProps extends TutorDataProps{
    acertos: number,
    erros: number,
    nota: number,
    aprovado: 'S'|'N'
}

interface AcurrenceProps {
    acertos: number,
    erros: number
}

interface GestorProps {
    imagem: AcurrenceProps,
    texto: AcurrenceProps,
    video: AcurrenceProps
}

interface MediaPorConteudo {
    texto: number,
    imagem: number,
    video: number
}

interface TipoProps {
    tipo_conteudo: 'texto'|'imagem'|'video',
}

interface FacilidadeProps extends TipoProps{
    grau_facilidade: number
}

interface DificuldadesProps extends TipoProps{
    grau_dificuldade: number
}

interface GestorDataProps {
    facilidades: Array<FacilidadeProps>,
    dificuldades: Array<DificuldadesProps>,
    ajuda: boolean,
    desempenho: 'muito baixo'|'baixo'|'medio'|'avancado'|'muito avancado',
    media: number,
    media_por_conteudo: MediaPorConteudo
}

export default class Agents {

    //Agente Tutor
    public static async Tutor(data: TutorProps): Promise<ResponseProps> {
        try{
            //Chamada da api
            const response:any = await api.post('/tutor', data);

            const ret = response?.data;

            return <ResponseProps>{
                success: true,
                message: 'Dados do Tutor retornados com sucesso',
                data: ret
            }

        }catch(error:any){
            console.error(error);
            return <ResponseProps>{
                success: false,
                message: error?.message??'Erro ao realizar a requisição do agente Tutor.',
            }
        }
    }

    //Agente Avaliardor
    public static async Avaliador(data: AvaliadorProps): Promise<ResponseProps> {
        try{
            //Chama a api
            const response:any = await api.post('/avaliador', {
                questoes: data.questoes
            });

            const ret = response?.data; 

            return <ResponseProps>{
                success: true,
                message: 'Dados do Avaliador retornados com sucesso',
                data: ret
            }

        }catch(error:any){
            console.error(error);
            return <ResponseProps>{
                success: false,
                message: error?.message??'Erro ao realizar a requisição do agente Avaliador.'
            }
        }
    }

    //Agente Gestor
    public static async Gestor(data: GestorProps): Promise<ResponseProps>{
        try{
            //Chamada da API
            const response = await api.post('/gestor', {
                dados: data
            });

            const ret:GestorDataProps = response?.data;

            const feedback:string = `
            Desempenho do aluno: ${ret.desempenho.toUpperCase()}\n
            Media geral: ${ret.media.toFixed(2)}% | Media em questões de texto: ${ret.media_por_conteudo.texto.toFixed(2)}% | Media em questões de imagem: ${ret.media_por_conteudo.imagem.toFixed(2)}% | Media em questões de vídeo: ${ret.media_por_conteudo.video.toFixed(2)}%\n
            Facilidades: ${
                ret.facilidades.length?
                ret?.facilidades[0]?.tipo_conteudo+
                (ret?.facilidades[1]?', '+ret?.facilidades[1].tipo_conteudo:'')+
                (ret?.facilidades[2]?', '+ret?.facilidades[2].tipo_conteudo:'')
                :'NENHUMA'
            } | Dificuldades: ${
                ret.dificuldades.length?
                ret?.dificuldades[0]?.tipo_conteudo+
                (ret?.dificuldades[1]?', '+ret?.dificuldades[1].tipo_conteudo:'')+
                (ret?.dificuldades[2]?', '+ret?.dificuldades[2].tipo_conteudo:'')+'\n'
                :'NENHUMA\n'
            }
            ${
                ret.ajuda?
                'O aluno não está indo bem e necessita de uma acompanhamento mais próximo do professor.':
                'O aluno está indo bem e não necessita de acompanhamento.'
            }
            `;

            return <ResponseProps>{
                success: true,
                message: 'Dados do Gestor retornados com sucesso',
                data: {...ret, feedback: feedback, tx_nivel: ret.desempenho}
            }

        }catch(error:any){
            console.error(error);
            return <ResponseProps>{
                success: false,
                message: error?.message??'Erro ao realizar a requisição do agente Gestor.'
            }
        }
    }

}