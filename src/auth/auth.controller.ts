import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from "./user.entity";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("/register")
    register(@Body() registerUserDto: RegisterUserDto): Promise<User>
    {
        return this.authService.register(registerUserDto);
    }

}
