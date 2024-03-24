export interface IPlan {
    id: number;
    name: string;
    text: string;
    advantages: IAdvantage[]
    card_bg_color: string;
}

export interface IAdvantage {
    id: number;
    name: string;
}

export function returnPlans(): IPlan[] {
    var plans : IPlan[] = [{id: 1, name: 'Starter', text: 'texto',advantages: [{ id: 1, name: '1 número de WhatsApp conectado' }], card_bg_color: '118, 195, 81'},
    {id: 2, name: 'Pro', text: 'texto',advantages: [{ id: 1, name: 'TODAS Funcionalidades do STARTER' }], card_bg_color: '112, 68, 237'},
    {id: 3, name: 'Agências', text: 'texto',advantages: [{ id: 1, name: 'TODAS Funcionalidades do Plano PRO' }], card_bg_color: '17, 135, 244'}
]
    
    return plans;
}