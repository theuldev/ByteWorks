export interface IService {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
}
export function returnServices(): IService[] {
    var services: IService[] = [
        { id: 1, title: 'Desenvolvimento de Sites', subtitle: 'Criamos sites modernos e responsivos, alinhados às melhores práticas de desenvolvimento e otimização de SEO. Nosso serviço de desenvolvimento é completo, abarcando desde a análise e planejamento até a implementação e manutenção contínua. Projetamos sites intuitivos, com foco na experiência do usuário (UX) e design atraente, para garantir que sua marca se destaque e se conecte com o público certo. Seja para um site institucional, e-commerce ou blog, desenvolvemos soluções que refletem a identidade da sua empresa e atendem às suas necessidades específicas.\nEsses serviços são pensados para impulsionar o crescimento do seu negócio, aumentar a eficiência e melhorar a presença digital, com qualidade e inovação em cada etapa.' , icon: 'bootstrapTv'},
        { id: 2, title: 'RPA (Automação de Processos Robóticos)', subtitle: 'Nossa consultoria oferece soluções em RPA para empresas que buscam otimizar processos e aumentar a produtividade com eficiência e segurança. A automação de processos robóticos permite que atividades repetitivas e manuais sejam realizadas por "bots" de software, reduzindo erros e liberando a equipe para se concentrar em tarefas de maior valor. Desenvolvemos, implementamos e monitoramos fluxos personalizados para garantir que a automação se adapte perfeitamente às necessidades de cada cliente, proporcionando resultados rápidos e confiáveis.' , icon: 'bootstrapRobot'},
        { id: 3, title: 'Web Crawler', subtitle: 'Com nosso serviço de Web Crawler, proporcionamos uma coleta automatizada e organizada de informações na web. Criamos crawlers personalizados que rastreiam sites e extraem dados relevantes conforme as necessidades do seu negócio. Essa tecnologia é ideal para empresas que desejam manter-se atualizadas com dados de mercado, acompanhar concorrentes, monitorar preços, ou até mesmo consolidar conteúdos de diversas fontes em um único repositório.\nNossos crawlers são configurados para navegar de forma eficaz e segura, garantindo o cumprimento das boas práticas e diretrizes de uso da internet. Além disso, oferecemos suporte contínuo e ajustes para que o crawler esteja sempre alinhado com os objetivos da sua empresa.', icon: 'bootstrapGear' }
    ]
    return services;
}