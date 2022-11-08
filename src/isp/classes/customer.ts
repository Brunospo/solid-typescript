/* eslint-disable prettier/prettier */

import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
  ) { }

  getName(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  constructor(public nome: string, public cnpj: string) { }

  getName(): string {
    return this.nome;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
