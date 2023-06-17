import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanPurposeService } from './loan_purpose.service';
import { CreateLoanPurposeDto } from './dto/create-loan_purpose.dto';
import { UpdateLoanPurposeDto } from './dto/update-loan_purpose.dto';

@Controller('loan-purpose')
export class LoanPurposeController {
  constructor(private readonly loanPurposeService: LoanPurposeService) {}

  @Post()
  create(@Body() createLoanPurposeDto: CreateLoanPurposeDto) {
    return this.loanPurposeService.create(createLoanPurposeDto);
  }

  @Get()
  findAll() {
    return this.loanPurposeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanPurposeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanPurposeDto: UpdateLoanPurposeDto) {
    return this.loanPurposeService.update(+id, updateLoanPurposeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanPurposeService.remove(+id);
  }
}
