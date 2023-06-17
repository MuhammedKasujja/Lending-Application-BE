import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanPurposeDto } from './create-loan_purpose.dto';

export class UpdateLoanPurposeDto extends PartialType(CreateLoanPurposeDto) {
    loanPurposeId: string| number
}
