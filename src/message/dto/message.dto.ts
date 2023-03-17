import { ApiProperty } from "@nestjs/swagger";

export class messageDto{
    @ApiProperty()
    messageId:string
    @ApiProperty()
    message:string
    @ApiProperty()
    userId:string
    @ApiProperty()
    from:string
    @ApiProperty()
    to:string
    
}