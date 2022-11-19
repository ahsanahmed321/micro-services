import { Injectable } from '@nestjs/common';

const orders = [
  { orderId: 1, price: 5, quantity: 1 },
  { orderId: 1, price: 5, quantity: 1 },
  { orderId: 1, price: 5, quantity: 1 },
];

@Injectable()
export class AppService {
  getOrders() {
    return orders;
  }
}
