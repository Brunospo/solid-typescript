/*Essa interface quebra o pricipio ISP, pois essa interface faz com que
quem a implementa seja obrigado a implementar coisas que ela não vai utilizar. */

export interface CustomerProtocol {
  nome: string;
  sobrenome: string;
  cpf: string;
  cnpj: string;
}

// Essas interfaces são mais recomendadas

export interface IndividualCustomerProtocol {
  nome: string;
  sobrenome: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  nome: string;
  cnpj: string;
}

export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}
