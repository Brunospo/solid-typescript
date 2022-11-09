/* eslint-disable prettier/prettier */

import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly percistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) { }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`);
    this.percistency.saveOrder();
    this.cart.clear();
    console.log(`O cliente é: ${this.customer.getName()} ${this.customer.getIDN()}`)
  }

}
