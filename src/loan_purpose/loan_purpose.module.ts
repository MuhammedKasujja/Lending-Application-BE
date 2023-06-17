import { Module } from '@nestjs/common';
import { LoanPurposeService } from './loan_purpose.service';
import { LoanPurposeController } from './loan_purpose.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanPurpose } from './entities/loan_purpose.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanPurpose])],
  controllers: [LoanPurposeController],
  providers: [LoanPurposeService],
})
export class LoanPurposeModule {}
