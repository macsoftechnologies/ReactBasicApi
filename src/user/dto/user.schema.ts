import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import {v4 as uuid} from 'uuid'

@Schema({timestamps:true})
export class user extends Document{
    @Prop({default:uuid})
    userId:string
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    password:string

}
export const userSchema=SchemaFactory.createForClass(user)
