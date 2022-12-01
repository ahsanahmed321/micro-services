import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_QUEUE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'eventQueue',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'eventQueueConsumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
