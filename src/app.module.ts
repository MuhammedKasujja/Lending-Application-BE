import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.config';
import { LoanModule } from './loan/loan.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { InstallmentModule } from './installment/installment.module';
import { LoanPurposeModule } from './loan_purpose/loan_purpose.module';
import { LoanTypeModule } from './loan_type/loan_type.module';
import { SettingModule } from './setting/setting.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    DatabaseModule,
    LoanModule,
    UserModule,
    ClientModule,
    InstallmentModule,
    LoanPurposeModule,
    LoanTypeModule,
    SettingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource ){}
}
