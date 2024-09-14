import { IsNotEmpty, IsString, IsNumber, IsNumberString } from 'class-validator';

export class QrDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsNumberString()
    bankNumber: string;
}