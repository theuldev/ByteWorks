export interface IQuestion {
    id: number;
    title: string;
    question: string;
}

export function returnQuestions(): IQuestion[] {
    var questions: IQuestion[] = [
        { id: 1, title: 'Não sou bom com tecnologia. Como vou saber o que fazer?', question: 'Você terá acesso a uma área de membros com todos vídeos explicativos, sem enrolação e direto ao ponto para te ensinar tudo o que você precisa para vender no automático. Sempre que você tiver dúvidas você poderá recorrer ao nosso time de suporte.' },
        { id: 2, title: 'Como consigo conectar meu WhatsApp ao BotConversa?', question: 'A conexão com o BotCovnersa é a mesma realizada com o WhatsApp web. Basta escanear o QR Code da plataforma e seu WhatsApp estará conectado.' },
        { id: 3, title: 'Quantos números de WhatsApp consigo conectar na plataforma?', question: 'Você pode conectar um número de WhatsApp por conta. Para conectar mais de um número por favor entre em contato com nossa equipe pelo email suporte@botconversa.com.br.' }
    ]
    return questions;
}