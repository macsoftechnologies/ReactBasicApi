import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { message, messageSchema } from './dto/message.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:message.name,schema:messageSchema}])],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
