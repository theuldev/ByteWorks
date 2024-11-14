export interface ITestimonial {
    id: number;
    client_name: string;
    title: string;
    subtitle: string;
    }
export function returnTestimonials(): ITestimonial[] {
    var testimonials: ITestimonial[] = [
         { id: 1,client_name: 'Ana Clara Mendes', title: 'Melhor experiência', subtitle: 'Simplesmente o melhor atendimento que já recebi! O suporte foi muito dedicado, me senti muito bem atendida e segura. O resultado final ficou perfeito, exatamente como eu queria. Recomendo sem dúvida alguma!'},
         {id: 2, client_name: 'Renan Polaquini',title: 'Qualidade e agilidade!',subtitle:'Em nosso caso que foi produzido uma ferramenta de automação, para substituir uma rotina que era feita varias vezes durante o dia, e que por mais que era aparentemente simples de se realizar, mesmo assim nos tomava cerca de 5min para desenvolver um planejamento de corte... multiplicando isso por umas 5 repeticoes durante o dia, totalizaria aprox 25min desenvolvendo cortes... agora com a ferramenta desenvolvida, gasta-se apenas alguns segundos e ja podemos realizar os cortes escolhidos.'},
         { id: 3,client_name: 'Maria Fernanda Souza', title: 'Serviço Excepcional!', subtitle: 'Foi uma experiência incrível! O atendimento foi rápido e a equipe super atenciosa. Eles entenderam exatamente o que eu precisava e entregaram muito mais do que eu esperava. Recomendo a todos que buscam profissionalismo e qualidade!' }
      
    ]
    return testimonials;
}