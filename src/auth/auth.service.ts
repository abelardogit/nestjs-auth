import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, Inject } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from "./user.entity";
import { UserRepository } from './users.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: UserRepository,
    ){}

    async register(registerUserDto: RegisterUserDto): Promise<User>
    {
        return await this.userRepository.register(registerUserDto);
    }
}
