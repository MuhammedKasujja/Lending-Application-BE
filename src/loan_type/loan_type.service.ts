import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoanTypeDto } from './dto/create-loan_type.dto';
import { UpdateLoanTypeDto } from './dto/update-loan_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanType } from './entities/loan_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanTypeService {
  constructor(
    @InjectRepository(LoanType) private loanTypeRepo: Repository<LoanType>,
  ) {}
  create(createLoanTypeDto: CreateLoanTypeDto) {
    const loanType = new LoanType();
    loanType.minAmount = createLoanTypeDto.minAmount;
    loanType.maxAmount = createLoanTypeDto.maxAmount;
    loanType.repaymentDays = createLoanTypeDto.repaymentDays;
    // TODO add person who is creating the loan type

    return this.loanTypeRepo.save(loanType);
  }

  findAll() {
    return this.loanTypeRepo.find();
  }

  findOne(id: number) {
    return this.getLoanTypeById(id);
  }

  async update(id: number, updateLoanTypeDto: UpdateLoanTypeDto) {
    const loanType = await this.getLoanTypeById(id);
    loanType.minAmount = updateLoanTypeDto.minAmount ?? loanType.minAmount;
    loanType.maxAmount = updateLoanTypeDto.maxAmount ?? loanType.maxAmount;
    loanType.repaymentDays =
      updateLoanTypeDto.repaymentDays ?? loanType.repaymentDays;
    return this.loanTypeRepo.save(loanType);
  }

  async remove(id: number) {
    const loanType = await this.getLoanTypeById(id);
    return this.loanTypeRepo.remove(loanType);
  }

  private async getLoanTypeById(id: number) {
    const loanType = await this.loanTypeRepo.findOneBy({ id });
    if (!loanType) {
      throw new HttpException(
        `LoanType with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return loanType;
  }
}
