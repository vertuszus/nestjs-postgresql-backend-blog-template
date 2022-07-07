import {IsNumber, IsString} from "class-validator";
import {ResponseMsg} from "../../shared/enums/response-msg.enum";

export class AddRoleDto {

    @IsString({message: ResponseMsg.shouldBeStringMsg})
    readonly value: string;

    @IsNumber({}, {message: ResponseMsg.shouldBeNumberMsg})
    readonly userId: number;

}
