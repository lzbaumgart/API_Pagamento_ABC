import { ApiProperty } from "@nestjs/swagger";
import { IsDate } from "class-validator";

export class PagamentoDto {

    @ApiProperty({required:true})
    @IsDate()
    data:Date;
}
