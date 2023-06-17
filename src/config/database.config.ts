import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'loan_application',
  entities: ["dist/**/**/*.entity{.ts,.js}"],
  synchronize: true,
});
