import { Injectable } from '@nestjs/common';

const users = [
  { name: 'Ahsan', email: 'ahsan@gmail.com', password: '!23' },
  { name: 'Zaid', email: 'ahsan@gmail.com', password: '!23' },
  { name: 'Taha', email: 'ahsan@gmail.com', password: '!23' },
];

@Injectable()
export class AppService {
  getUsers() {
    return users;
  }
}
