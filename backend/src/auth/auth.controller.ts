import { Controller, Post, HttpStatus, HttpCode, Get, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './auth.signin.dto';
import { validateObject } from '../common/util/validator.util';
import { NotFoundException } from '../common/exceptions/notfound.exception';
import { ErrorDto } from '../common/dto/error.dto';
import { AuthSignUpDto } from './auth.signup.dto';
import { AlreadyExistsException } from '../common/exceptions/alreadyexists.exception';

@Controller('v1p/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('signin')
    public async signIn(@Body() signInDto: AuthSignInDto, @Res() res) {
        const validation = await validateObject(signInDto, AuthSignInDto);
        if (validation.length > 0) {
            return res.status(HttpStatus.BAD_REQUEST).json({errors: validation});
        }

        try {
            const signedIn = await this.authService.signIn(signInDto);
            return res.status(HttpStatus.OK).json(signedIn);
        } catch (e) {
            // a user with this email was not found
            if (e instanceof NotFoundException) {
                return res.status(HttpStatus.NOT_FOUND).json(new ErrorDto(e.message));
            }
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new ErrorDto(e.message));
        }
    }

    @Post('signup')
    public async signUp(@Body() signUpDto: AuthSignUpDto, @Res() res) {
        const validation = await validateObject(signUpDto, AuthSignUpDto);
        if (validation.length > 0) {
            return res.status(HttpStatus.BAD_REQUEST).json({errors: validation});
        }

        try {
            const signedUp = await this.authService.signUp(signUpDto);
            return res.status(HttpStatus.OK).json(signedUp);
        } catch (e) {
            // a user with this email already exists
            if (e instanceof AlreadyExistsException) {
                return res.status(HttpStatus.CONFLICT).json(new ErrorDto(e.message));
            }
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new ErrorDto(e.message));
        }
    }
}