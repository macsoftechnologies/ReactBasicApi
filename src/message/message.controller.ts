import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { messageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('/addmessge')
  async sendMess(@Body() body:messageDto){
    try{
      const response=await this.messageService.createmessage(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }

  @Get('getmessages')
  async getMessage(){
    try{
      const response=await this.messageService.getmessage()
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }


  @Post('/getMessageId')
  async getMesage(@Body() body:messageDto){
    try{
      const response=await this.messageService.findById(body)
      return response
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }

  @Post('/delmessage')
  async removemes(@Body() body:messageDto){
    try{
      const result=await this.messageService.delteMess(body)
      return result
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
