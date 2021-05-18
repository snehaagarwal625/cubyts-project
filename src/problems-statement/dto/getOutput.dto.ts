import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export class GetOutputDto{
    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    input: string[];
}