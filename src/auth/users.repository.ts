import { Repository } from "typeorm";

import { User } from "./user.entity";
import { RegisterUserDto } from "./dto/register-user.dto";

export class UsersRepository extends Repository<User> {
    // this function is unreachable, why???
    async register(registerUserDto: RegisterUserDto): Promise<User>
    {
        const {name, email, password} = registerUserDto;

        const user = this.create({name, email, password});
        
        await this.insert(user);

        return user;
    }
}