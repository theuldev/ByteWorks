export interface IExample {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
    image: string;
    color: string;
}

export function returnExamples(): IExample[] {
    var examples: IExample[] = [
        { id: 1, title: 'agendamento', subtitle: 'Simplifique o agendamento para seus clientes com nosso chatbot de atendimento automático.', icon: 'matCalendarTodayOutline',image:'', color:'118, 195, 81' },
        { id: 2, title: 'orçamento', subtitle: 'Agilize a elaboração de orçamentos para seus clientes usando nosso chatbot com atendimento automático.' , icon:  'bootstrapCreditCard',image:'', color:'112, 68, 237' },
        { id: 3, title: 'indicação', subtitle: 'Impulsione suas indicações com nosso chatbot automático. Facilite o compartilhamento e conquiste novos clientes de forma rápida e eficiente.', icon: 'matHandshakeOutline',image:'', color:'17, 135, 244'  },
    ]
    return examples;
}