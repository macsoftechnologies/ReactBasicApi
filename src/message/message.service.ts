import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { messageDto } from './dto/message.dto';
import { message } from './dto/message.schema';

@Injectable()
export class MessageService {
    constructor(@InjectModel(message.name) private messageModel:Model<message>){}
    

    async createmessage(params:messageDto){
        try{
            const addmess=await this.messageModel.create(params)
            if(addmess){
                return{
                 statusCode:HttpStatus.OK,
                 sms:addmess
                }
            }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error
            }
        }
    }


    async getmessage(){
        try{
            const getMess=await this.messageModel.find()
            if(getMess){
                return{
                    statusCode:HttpStatus.OK,
                    data:getMess
                }
            }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async findById(params:messageDto){
        try{
            const messages=await this.messageModel.findOne({userId:params.userId})
            if(messages){
                return {
                    statusCode:HttpStatus.OK,
                    data:messages
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

async findmessageTo(params:messageDto){
    try{
        const getto=await this.messageModel.findOne({to:params.to})
        if(getto){
            return {
                statusCode:HttpStatus.OK,
                toReq:getto
            }
        }
    }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
}
   
    async findmessageFrom(params:messageDto){
        try{
            const getfrom=await this.messageModel.findOne({from:params.from})
            if(getfrom){
                return {
                    statusCode:HttpStatus.OK,
                    fromreq:getfrom
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async delteMess(params:messageDto){
        try{
            const del=await this.messageModel.deleteOne({messageId:params.messageId})
            if(del){
                return {
                    statusCode:HttpStatus.OK,
                    message:'deleted Sucessfully',
                    delete:del
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}
