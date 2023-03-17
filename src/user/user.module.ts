import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { user, userSchema } from './dto/user.schema';

@Module({
   imports:[MongooseModule.forFeature([{name:user.name,schema:userSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
