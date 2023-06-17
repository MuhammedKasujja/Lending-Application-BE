import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanInstallment } from './entities/installment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LoanInstallment])],
  controllers: [InstallmentController],
  providers: [InstallmentService]
})
export class InstallmentModule {}
