/* eslint-disable prettier/prettier */

import { EnterpriseCustomerProtocol, IndividualCustomerProtocol } from "./customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
  ) { }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  constructor(public nome: string, public cnpj: string) { }
}
