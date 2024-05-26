import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 5000,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [User],
    autoLoadEntities: true,
    synchronize: true,
  }), AuthModule],
})
export class AppModule {}
