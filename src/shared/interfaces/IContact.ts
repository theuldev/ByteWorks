export class IContact {
    constructor(_email : string,_phone : string,_nome:string ,_help:string, _position: string,_enterprise:string ) {
        this.email = _email,
        this.message = `
        Nome do Cliente: ${_nome} \n
        Email: ${_email} \n
        Telefone: ${_phone} \n
        Cargo :${_position} \n
        Empresa :${_enterprise} \n
        Mensagem do Cliente:${_help}` 
        this.subject = `Assunto do Email: Novo Contato de BytesWork Consultoria - ${_nome}`
    }
    email?: string;
    subject?: string;
    message?: string;

}