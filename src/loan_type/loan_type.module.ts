import { Module } from '@nestjs/common';
import { LoanTypeService } from './loan_type.service';
import { LoanTypeController } from './loan_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanType } from './entities/loan_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanType])],
  controllers: [LoanTypeController],
  providers: [LoanTypeService]
})
export class LoanTypeModule {}
