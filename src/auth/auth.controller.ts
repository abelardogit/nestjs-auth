import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from "./user.entity";
import { usersRepository } from './users.repository';

@Controller('auth')
export class AuthController {
    
    @Post("/register")
    register(@Body() registerUserDto: RegisterUserDto): Promise<User>
    {
        return usersRepository.register(registerUserDto);
    }

}
