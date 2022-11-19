import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users = [
    { name: 'Ahsan', email: 'ahsan@gmail.com', password: '123' },
    { name: 'Zaid', email: 'ahsan@gmail.com', password: '123' },
    { name: 'Taha', email: 'ahsan@gmail.com', password: '123' },
  ];

  constructor(@Inject('EVENT_QUEUE') private eventQueue: ClientProxy) {}

  getUsers() {
    return this.users;
  }

  createUser(user) {
    this.users.push(user);
    this.eventQueue.emit('user-created', user);
  }
}
