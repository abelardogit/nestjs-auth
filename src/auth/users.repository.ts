import { Repository } from "typeorm";

import { User } from "./user.entity";
import { RegisterUserDto } from "./dto/register-user.dto";

export interface UserRepository extends Repository<User> {
    this: Repository<User>;
    register(registerUserDto: RegisterUserDto): Promise<User>;
}

export const usersRepository: Pick<UserRepository, any> = {
    async register(registerUserDto: RegisterUserDto): Promise<User>
    {
        const {name, email, password} = registerUserDto;

        const user = this.create({name, email, password});
        
        await this.insert(user);

        return user;
    }
};