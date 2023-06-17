import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoanPurposeDto } from './dto/create-loan_purpose.dto';
import { UpdateLoanPurposeDto } from './dto/update-loan_purpose.dto';
import { Repository } from 'typeorm';
import { LoanPurpose } from './entities/loan_purpose.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoanPurposeService {
  constructor(
    @InjectRepository(LoanPurpose)
    private loanPurposeRepo: Repository<LoanPurpose>,
  ) {}
  async create(
    createLoanPurposeDto: CreateLoanPurposeDto,
  ): Promise<LoanPurpose> {
    console.log({ createLoanPurposeDto });
    const loanPurpose = new LoanPurpose();
    loanPurpose.purpose = createLoanPurposeDto.purpose;
    return await this.loanPurposeRepo.save(loanPurpose);
  }

  findAll() {
    return this.loanPurposeRepo.find();
  }

  async findOne(id: number) {
    return await this.findLoanPurposeById(id);
  }

  async update(id: number, updateLoanPurposeDto: UpdateLoanPurposeDto) {
    const loanPurpose = await this.findLoanPurposeById(id);

    loanPurpose.purpose = updateLoanPurposeDto.purpose!;

    return await this.loanPurposeRepo.save(loanPurpose);
  }

  async remove(id: number) {
    const loanPurpose = await this.findLoanPurposeById(id);
    return await this.loanPurposeRepo.remove(loanPurpose);
  }

  private async findLoanPurposeById(id: number) {
    const loanPurpose = await this.loanPurposeRepo.findOneBy({ id });
    if (!loanPurpose) {
      throw new HttpException(
        `Loan purpose with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return loanPurpose;
  }
}
