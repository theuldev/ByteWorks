export interface IPlan {
    id: number;
    name: string;
    text: string;
    advantages: IAdvantage[];
    price: number;
}

export interface IAdvantage {
    id: number;
    name: string;
}

export function returnPlans(): IPlan[] {
    var plans : IPlan[] = [{id: 1, name: 'Básico', text: 'Plano grátis',advantages: [{ id: 1, name: '1 número de WhatsApp conectado' }], price: 50 },
    {id: 2, name: 'Profissional', text: 'Mais popular',advantages: [{ id: 1, name: 'TODAS Funcionalidades do STARTER' }], price: 50 },
    {id: 3, name: 'Agências', text: 'Para empresas',advantages: [{ id: 1, name: 'TODAS Funcionalidades do Plano PRO' }], price: 50 }
]
    
    return plans;
}