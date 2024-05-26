import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule,getDataSourceToken,getRepositoryToken} from '@nestjs/typeorm';
import { usersRepository } from './users.repository';
import { Hasher } from './utils/hasher.util';
import { User } from './user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    {
      provide: getRepositoryToken(User),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(User).extend(usersRepository)
      }, 
    },
    AuthService, 
    Hasher
  ],
})
export class AuthModule {}
