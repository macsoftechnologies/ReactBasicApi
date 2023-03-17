import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from './dto/user.dto';
import { user } from './dto/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(user.name) private userModel:Model<user>){}
    
    async create(params:userDto){
        try{
            const adduser=await this.userModel.create(params)
            if(adduser){
                return{
                    statusCode:HttpStatus.OK,
                    message:'Sucessfully registered',
                    request:adduser
                }
            }
            return {
              statusCode: HttpStatus.BAD_REQUEST,
              message: 'Invalid Password',
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 

            }
        }
    }


    async Login(req: userDto) {
        try {
          const loginRes = await this.userModel
            .findOne({ $or: [{ email: req.email }] })
            .lean();
          if (loginRes) {
            if (loginRes.password === req.password) {
              return {
                statusCode: HttpStatus.OK,
                message: 'Login SuccessFully',
                logindetails: loginRes,
              };
            }
            return {
              statusCode: HttpStatus.BAD_REQUEST,
              message: 'Invalid Password',
            };
          }
          return {
            statusCode: HttpStatus.NOT_FOUND,
            msg: 'User Not Found',
          };
        } catch (error) {
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          };
        }
      }
    
}
