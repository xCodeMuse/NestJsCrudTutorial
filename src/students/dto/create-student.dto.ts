import { IsNotEmpty, IsNumber, IsString, Max, MaxLength } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    @Max(99)
    readonly age: number;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(2)
    readonly class: number;

    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    readonly address: string;
}