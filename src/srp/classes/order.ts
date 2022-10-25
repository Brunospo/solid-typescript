/* eslint-disable prettier/prettier */

import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { ShoppingCart } from './shopping-cart';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly percistency: Persistency
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
    this.messaging.sendMessage(`Seu pedido com total de ${this.cart.total()} foi recebido`);
    this.percistency.saveOrder();
    this.cart.clear();
  }

}
