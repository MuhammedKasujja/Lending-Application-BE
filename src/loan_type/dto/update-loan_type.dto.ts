import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanTypeDto } from './create-loan_type.dto';

export class UpdateLoanTypeDto extends PartialType(CreateLoanTypeDto) {
    lastUpdatedBy: number
}
