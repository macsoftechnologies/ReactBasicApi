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


  @Post('/getMessageUserById')
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

@Post('/getmessageTo')
async getTomessage(@Body() body:messageDto){
  try{
    const response=await this.messageService.findmessageTo(body)
    return response
  }catch(error){
    return {
      statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
      message:error 
    }
  }
}

@Post('/getmeessgefrom')
async getfromessage(@Body() body:messageDto){
  try{
    const response=await this.messageService.findmessageFrom(body)
    return response
  }catch(error){
    return {
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
