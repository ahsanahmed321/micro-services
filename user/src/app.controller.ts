import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get-users' })
  getUsers() {
    return this.appService.getUsers();
  }

  @MessagePattern({ cmd: 'create-user' })
  createUser(data) {
    return this.appService.createUser(data);
  }
}
