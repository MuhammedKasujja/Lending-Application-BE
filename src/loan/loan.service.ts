import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanService {
  constructor(@InjectRepository(Loan) private loanRepo: Repository<Loan>) {}

  create(createLoanDto: CreateLoanDto) {
    const loan = new Loan();
    loan.amount = createLoanDto.amount;
    loan.clientId = createLoanDto.clientId;
    loan.status = 1;
    return this.loanRepo.save(loan);
  }

  findAll() {
    return this.loanRepo.find();
  }

  findOne(id: number) {
    return this.getLoanById(id);
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    const loan = await this.getLoanById(id);
    loan.status = updateLoanDto.status ?? loan.status
    return this.loanRepo.save(loan);
  }

  async remove(id: number) {
    const loan = await this.getLoanById(id);
    return await this.loanRepo.remove(loan);
  }

  private async getLoanById(id: number) {
    const loan = await this.loanRepo.findOneBy({ id });
    if (!loan) {
      throw new HttpException(
        `Loan with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return loan;
  }
}
