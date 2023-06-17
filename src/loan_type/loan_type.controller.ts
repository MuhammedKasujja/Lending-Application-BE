import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanTypeService } from './loan_type.service';
import { CreateLoanTypeDto } from './dto/create-loan_type.dto';
import { UpdateLoanTypeDto } from './dto/update-loan_type.dto';

@Controller('loan-type')
export class LoanTypeController {
  constructor(private readonly loanTypeService: LoanTypeService) {}

  @Post()
  create(@Body() createLoanTypeDto: CreateLoanTypeDto) {
    return this.loanTypeService.create(createLoanTypeDto);
  }

  @Get()
  findAll() {
    return this.loanTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanTypeDto: UpdateLoanTypeDto) {
    return this.loanTypeService.update(+id, updateLoanTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanTypeService.remove(+id);
  }
}
