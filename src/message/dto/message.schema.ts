import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"; 
import { v4 as uuid } from 'uuid';

@Schema({timestamps:true})
export class message extends Document{
    @Prop({default:uuid})
    messageId:string
    @Prop()
    message:string
    @Prop()
    userId:string
    @Prop()
    from:string
    @Prop()
    to:string
}

export const messageSchema=SchemaFactory.createForClass(message)