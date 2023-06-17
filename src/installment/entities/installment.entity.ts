import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({})
export class LoanInstallment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loanId: number

  @Column()
  amount: number

  @Column()
  status: number

  @Column({type: "datetime", nullable: true})
  paidAt?: Date

  @Column({type: "datetime"})
  paymentDate: Date

  @CreateDateColumn()
  createdAt: Date; // Creation date

  @UpdateDateColumn()
  updatedAt: Date; // Last updated date
}
