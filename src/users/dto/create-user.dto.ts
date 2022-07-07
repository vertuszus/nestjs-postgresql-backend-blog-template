import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";
import {ResponseMsg} from "../../shared/enums/response-msg.enum";

export class CreateUserDto {

    @ApiProperty({example: 'test@gmail.com', description: 'Почта'})
    @IsString({message: ResponseMsg.shouldBeStringMsg})
    @IsEmail({}, {message: ResponseMsg.incorrectEmailMsg})
    readonly email: string;

    @ApiProperty({example: 'pass', description: 'Пароль'})
    @IsString({message: ResponseMsg.shouldBeStringMsg})
    @Length(8, 16, {message: ResponseMsg.correctPasswordLengthLimitsMsg})
    readonly password: string;

}
