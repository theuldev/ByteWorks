export interface IToolsAdvantages {
    id: number;
    advantage: string;

}
export function returnToolsAdvantages(): IToolsAdvantages[] {
    var advantages = [{ id: 1, advantage: '1º Construtor de Robôs “Arrasta e Solta” do Brasil' }, { id: 2, advantage: 'Rapidamente Crie Conversas Inteligentes' }, { id: 3, advantage: 'Coloque Múltiplos Atendentes No Mesmo Número' }, { id: 4, advantage: 'Notifique Departamentos Específicos de Sua Empresa' }, { id: 5, advantage: 'Tenha Acesso Completo A Todas Informações Das Conversas' }]
    return advantages;
}