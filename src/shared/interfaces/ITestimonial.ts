export interface ITestimonial {
    id: number;
    client_name: string;
    title: string;
    subtitle: string;
    }
export function returnTestimonials(): ITestimonial[] {
    var testimonials: ITestimonial[] = [
        { id: 1,client_name: 'Maria Fernanda Souza', title: 'Serviço Excepcional!', subtitle: 'Foi uma experiência incrível! O atendimento foi rápido e a equipe super atenciosa. Eles entenderam exatamente o que eu precisava e entregaram muito mais do que eu esperava. Recomendo a todos que buscam profissionalismo e qualidade!' },
        { id: 2,client_name: 'Thiago Oliveira',title: 'Qualidade e agilidade!', subtitle: 'Fiquei impressionado com a agilidade e a precisão do serviço! Cada etapa foi cumprida no prazo, e a entrega final estava impecável. Com certeza voltarei para futuras necessidades. Parabéns pelo ótimo trabalho!' },
        { id: 3,client_name: 'Ana Clara Mendes', title: 'Melhor experiência', subtitle: 'Simplesmente o melhor atendimento que já recebi! O suporte foi muito dedicado, me senti muito bem atendida e segura. O resultado final ficou perfeito, exatamente como eu queria. Recomendo sem dúvida alguma!'}
    ]
    return testimonials;
}