import { IStack } from "./IStack";

export interface IProject {
    id: number;
    title: string;
    subtitle: string;
    stacks: IStack[];
    year: string;
    image?: string;
    type: string;
}

export function returnProjects(): IProject[] {
    const project: IProject[] = [{
        id: 1, 
        title: 'Web Scraping Kabum', 
        subtitle: 'Este foi um projeto desenvolvido para automatizar a coleta de informações de Smart TVs no site da Kabum afim de receber as ofertas primeiro! A solução faz o scraping (raspagem) de dados de forma eficiente, obtendo nomes, preços e links de cada produto listado no site. Através dessa automação, o cliente conseguiu monitorar a variação de preços e disponibilidades dos produtos em tempo real, gerando relatórios em CSV com todos os detalhes das ofertas. Essa abordagem permitiu uma análise de mercado mais precisa e rápida, possibilitando melhores decisões na compra e venda de produtos.', year: '2022', 
        stacks: [{ id: 1, name: '#Python' },
            { id: 2, name: '#WebScraping' },
            { id: 3, name: '#Automação' }], 
        image: 'control.jpg',
        type: 'backend'
    }, {
        id: 2, 
        title: 'Agendamento Automático',
        subtitle: 'Esse projeto é uma integração direta com o Trello e contém uma interface gráfica moderna com botões para importar documentos. A tarefa de forma manual levava em torno de 8-15 minutos e era feito de 5 - 10 vezes ao dia, tempo que foi reduzido a apenas 1 minuto. Ou seja, reduzi de 40 a O robô busca um card no trello a partir do CPF, recolhe apenas algumas informações principais como cpf e/ou cnpj, email, nome completo, acessa o site da FenaconCD, insere os dados, põe documentação do cliente e após finalizado ele corrige o nome do documento (pdf, jpeg ou jpg), e envia pro Trello uma etiqueta informando que o cliente já está agendado, o pedido que foi gerado no agendamento e também envia o documento com nome corrigido.',
        year: '2023',
        stacks: [{ id: 1, name: '#Python' },
            { id: 2, name: '#Automação' },
            { id: 3, name: '#IntegraçãoComTrello' },
            { id: 4, name: '#InterfaceGráfica' },
            { id: 5, name: '#ImportaçãoDeDocumentos' },
            { id: 6, name: '#AutomaçãoDeProcessos' },
            { id: 7, name: '#ReduçãoDeTempo' },
            { id: 8, name: '#EficiênciaOperacional' },], 
        image: 'agendamento_imagem.jpg',
        type: 'backend'
    },
    {
        id: 3, 
        title: 'Automação para Rodoviária - DTIE', 
        subtitle: 'Este robô foi desenvolvido para automatizar o processo de registro de trechos rodoviários no sistema SIAET do DNIT. A solução foi especialmente útil para agilizar a inserção de dados de planilhas com informações de rodovias, como BR, siglas, e quilometragem inicial e final de cada trecho. Com a automação, o cliente pôde realizar as operações de forma mais eficiente, eliminando a necessidade de inserções manuais, o que economizou tempo e reduziu erros humanos no processo. Além disso, o aplicativo inclui uma interface amigável para o usuário selecionar e importar as planilhas necessárias, proporcionando um fluxo de trabalho simplificado e eficaz.', 
        year: '2023',
        stacks: [{ id: 1, name: '#Python' },
        { id: 2, name: '#Automação' }], 
        image: 'rodovia.jpg', 
        type: 'frontend'
    }];
    return project;
}