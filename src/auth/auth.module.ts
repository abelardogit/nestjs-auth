import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmExModule } from 'typeorm';
import { UsersRepository } from './users.repository';
import { Hasher } from './utils/hasher.util';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UsersRepository])],
  controllers: [AuthController],
  providers: [AuthService, Hasher]
})
export class AuthModule {}
