import { Injectable, Inject } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from "./user.entity";
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
    constructor(
        @Inject(UsersRepository)
        private usersRepository: UsersRepository,
    ){}

    async register(registerUserDto: RegisterUserDto): Promise<User>
    {
        console.log(this.usersRepository.register);
        return await this.usersRepository.register(registerUserDto);
    }
}
