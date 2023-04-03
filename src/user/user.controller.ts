import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/addUser')
  async user(@Body() body:userDto){
    try{
      const response=await this.userService.create(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }


  
  @Post('/login')
  async login(@Body() req:userDto) {
    try {
      const result = await this.userService.Login(req);
      if (result) {
        return result;
      }
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        msg: 'Invalid credentials',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      };
    }
  }



  @Get('/getUsers')
  async userget(@Body() body:userDto){
    const result=await this.userService.get()
    return result
  }catch(error){
    return {
      statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
      message:error
    }
  }

  @Post('/getuserByid')
  async getuser(@Body() body:userDto){
    try{
      const result=await this.userService.getById(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('/deleteUser')
  async removeUser(@Body() body:userDto){
    try{
      const result=await this.userService.deleteUser(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('/updateUser')
  async updateUser(@Body() body:userDto){
    try{
      const result=await this.userService.editUser(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
