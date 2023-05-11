import { IsNumber, IsString, Max, MaxLength } from "class-validator";

export class UpdateStudentDto {
    @IsString()
    @MaxLength(40)
    readonly name: string;

    @IsNumber()
    @Max(99)
    readonly age: number;

    @IsNumber()
    @MaxLength(2)
    readonly class: number;

    @IsString()
    @MaxLength(40)
    readonly address: string;
}