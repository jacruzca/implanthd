import { IsString, IsBoolean, IsOptional, Length, IsEmail } from 'class-validator';

export class AuthSignInDto {

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @Length(6)
    readonly password: string;

    @IsBoolean()
    @IsOptional()
    readonly rememberPassword: boolean;
}