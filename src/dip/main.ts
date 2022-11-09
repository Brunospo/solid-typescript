import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
import { IndividualCustomer } from './classes/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('Bruno', 'Bispo', '12345678999');
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('Camisa', 19.99));
shoppingCart.addItem(new Product('Camiseta', 10.99));
shoppingCart.addItem(new Product('Shorts', 29.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();

console.log(order.orderStatus);
