import { IStack } from "./IStack";

export interface IProject{
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
        id: 1, title: 'MovimentControl', subtitle: 'O MovimentControl é um gerenciador que permite realizar o cadastro, atualização e exclusão de pacientes em uma clínica de Fisioterapia.O sistema foi projetado para aprimorar a gestão e possui um sistema de login, complementado por autenticação de dois fatores.Após o usuário efetuar o login, um token é imediatamente enviado para o seu e-mail, garantindo a validação necessária para o acesso ao sistema.A arquitetura do MovimentControl é composta por uma sólida API desenvolvida em ASP.NET responsável pelo Backend e o banco de dados SQL SERVER.Para a interface do usuário,utiliza-se uma aplicação em Angular no Frontend.', year: '2022', stacks: [{ id: 1, name: 'Angular' }, { id: 2, name: '.NET' }, { id: 3, name: 'Typescript' }, { id: 4, name: 'Sql Server' }, { id: 5, name: 'C#' }, { id: 6, name: 'CSS' }]
        , image: 'moviment-control-img.png', type: 'fullstack'
    }, {
        id: 2, title: 'OtakuOrganize', subtitle: 'O OtakuOrganize é um sistema de organização dedicado a animes,proporcionando aos usuários a capacidade de adicionar e acompanhar seus animes favoritos após efetuar o login.A arquitetura adotada para esse sistema é uma arquitetura de microserviços,pois ela permite que a aplicação tenha uma boa flexibilidade e escalabilidade,para isso foram construidas APIs que se conectam,comunicam e integram atráves de troca de "mensagens" utilizando a ferramenta do RabbitMq que atua como intermediário entre a relação dessas duas APIs e otimizando a troca de mensagens e o Service Discovery Consul uma ferramenta que complementa o RabbitMQ ao auxiliar na identificação da localização das APIs hospedadas.Também o desenvolvimento dessas APIs foram utilizados algumas arquiteturas e padrões de projeto como DDD,CQRS,Mediator e entre outros.', year: '2023', stacks: [{ id: 1, name: '.NET' }, { id: 2, name: 'Sql Server' }, { id: 3, name: 'C#' }]
        , image: 'otaku-organize-img.png', type: 'backend'
    },
    {
        id: 3, title: 'TechTrack', subtitle: 'O TechTrack foi desenvolvido pensando em solucionar um dos Objetivos de Desenvolvimento Sustentável no Brasil proposto pela ONU buscando fornecer suporte abrangente a indivíduos em busca de orientação no mercado de trabalho da TI.Diante da ampla gama de especializações em constante evolução,encontrar o caminho certo pode ser um desafio significativo.Este projeto foi criado com a visão de ser uma bússola precisa para orientar cada indivíduo em sua jornada na TI.Para o desenvolvimento desse projeto foi utilizado o Angular para desenvolvimento do Frontend consumindo as APIs criadas pelo MockAPI.', year: '2023', stacks: [{ id: 1, name: 'Angular' }, { id: 2, name: 'Typescript' }, { id: 3, name: 'Javascript' }, { id: 4, name: 'HTML' }, { id: 3, name: 'SCSS' }]
        , image: 'techtrack-img.png', type: 'frontend'
    }, {
        id: 4, title: 'PHTech', subtitle: 'O TechTrack foi desenvolvido pensando em solucionar um dos Objetivos de Desenvolvimento Sustentável no Brasil proposto pela ONU buscando fornecer suporte abrangente a indivíduos em busca de orientação no mercado de trabalho da TI.Diante da ampla gama de especializações em constante evolução,encontrar o caminho certo pode ser um desafio significativo.Este projeto foi criado com a visão de ser uma bússola precisa para orientar cada indivíduo em sua jornada na TI.Para o desenvolvimento desse projeto foi utilizado o Angular para desenvolvimento do Frontend consumindo as APIs criadas pelo MockAPI.', year: '2023', stacks: [{ id: 1, name: 'Angular' }, { id: 2, name: 'Typescript' }, { id: 3, name: 'Javascript' }, { id: 4, name: 'HTML' }, { id: 3, name: 'SCSS' }]
        , image: 'phtech-img.png', type: 'frontend'
    }];
    return project;
}