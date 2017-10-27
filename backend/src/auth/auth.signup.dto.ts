import { IsString, IsBoolean, IsOptional, Length, IsEmail } from 'class-validator';

export class AuthSignUpDto {

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @Length(6)
    readonly password: string;
}